import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setSelectedTreatment }) => {
    const { name, slots } = treatment;
    const handleSubmit = (event) => {
        event.preventDefault()


        setSelectedTreatment(null)
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
                        <select class="select select-bordered w-full ">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="" placeholder="Full Name" class="input input-bordered w-full " />
                        <input type="text" name="" placeholder="Phone No" class="input input-bordered w-full " />
                        <input type="text" name=""
                            placeholder="Email" class="input input-bordered w-full " />
                        <input type="submit" className='btn btn-accent' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;