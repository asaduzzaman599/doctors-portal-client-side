import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Appointment from '../Home/Appointment';
import DashBoardTitle from '../Shared/Common/DashBoardTitle';
import Dashboard from './Dashboard';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
const Payment = () => {
    const { appointmentId } = useParams()
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState(null)
    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/booking/${appointmentId}?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then(res => res.json())
                .then((data) => setAppointment(data.appointment))
        }
    }, [user])

    console.log(appointment?.treatmentName)
    return (
        <div>

            <div className='grid  gap-10'>

                <div className="card max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl'>Hello, <span className='text-success'>{appointment?.userName}</span></p>
                        <h2 className="card-title">Payment for : {appointment?.treatmentName}</h2>
                        <p>We will see you {appointment?.formattedDate} at {appointment?.slot}</p>
                        <p>Please Pay ${appointment?.price}</p>

                    </div>
                </div>

                <div className="card max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment} />
                        </Elements>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Payment;