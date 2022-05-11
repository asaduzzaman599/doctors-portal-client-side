import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setSelectedTreatment }) => {
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
        fetch("http://localhost:5000/treatment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSelectedTreatment(null)
            })
    }

    return (
        <>
            <input type="checkbox" id="book-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="book-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Booking for {name}</h3>
                    <form onSubmit={handleSubmit} className="grid gap-4 px-4 mt-4">
                        <input type="text" disabled
                            name="" class="input input-bordered w-full " value={format(date, 'PP')} />
                        <select name='slot' class="select select-bordered w-full ">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="name" placeholder="Full Name" class="input input-bordered w-full " required />
                        <input type="text" name="phone" placeholder="Phone No" class="input input-bordered w-full " required />
                        <input type="text" name="email"
                            placeholder="Email" class="input input-bordered w-full " required />
                        <input type="submit" className='btn btn-accent' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;