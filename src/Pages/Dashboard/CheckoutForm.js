import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [user] = useAuthState(auth)
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if (user && appointment) {
            fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/create-payment-intent?email=${user?.email}`, {
                method: "POST",
                headers: {
                    "content-type": 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({ price: appointment?.price })
            }).then(res => res.json())
                .then(data => {
                    setClientSecret(data.clientSecret)
                })
        }
    }, [user, appointment])


    const handleSubmit = async (event) => {
        setCardSuccess('')
        event.preventDefault()


        if (!stripe || !elements) {
            return
        }

        const cardElement = elements.getElement(CardElement);

        if (cardElement == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card"
            , card: cardElement
        })


        setCardError(error?.message || '')



        //confirm card payment
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        setCardError(intentError?.message || '')
        setCardSuccess(intentError ? "" : "Your Payment Complete")
        console.log(paymentIntent)

        if (paymentIntent) {
            fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/payment/${appointment._id}?email=${user?.email}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json",
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({
                    transactionId: paymentIntent.id,
                    paid: true
                })
            }).then(res => res.json())
                .then((data) => {
                    if (data.matchedCount) {
                        toast.success('Payment successfully Completed')
                        navigate('/dashboard/myappointments')
                    }
                })
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-accent mt-5' disabled={!stripe || !clientSecret} >
                Pay
            </button>
            {cardError && <p className='text-red-500'><small>{cardError}</small></p>}
            {cardSuccess && <p className='text-success'><small>{cardSuccess}</small></p>}
        </form>
    );
};

export default CheckoutForm;