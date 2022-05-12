import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const BookingModal = ({ treatment, date, setSelectedTreatment }) => {
    const [user] = useAuthState(auth)
    const { name, slots } = treatment;
    const handleSubmit = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const name = event.target.name.value;
        const slot = event.target.slot.value;

        const appointment = {
            name, email, phone, slot, date
        }
        console.log(appointment)
        fetch("http://localhost:5000/booked", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Appointment successfully booked')
                    setSelectedTreatment(null)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for {name}</h3>
                    <form onSubmit={handleSubmit} className="grid gap-4 px-4 mt-4">
                        <input type="text" disabled
                            name="" className="input input-bordered w-full " value={format(date, 'PP')} />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option key={i}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" value={user?.displayName} className="input input-bordered w-full " required disabled />
                        <input type="text" name="phone" placeholder="Phone No" className="input input-bordered w-full " required />
                        <input type="text" name="email"
                            value={user?.email} className="input input-bordered w-full " required disabled />
                        <input type="submit" className='btn btn-accent' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;