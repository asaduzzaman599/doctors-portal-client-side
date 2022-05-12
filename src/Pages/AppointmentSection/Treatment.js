import React from 'react';

const Treatment = ({ treatment, setSelectedTreatment }) => {
    const { name, slots } = treatment;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots[0]}</p>
                {slots.length > 0
                    ? <p className='text-sm'>{`${slots.length} Space Available`}</p>
                    : <p className='text-sm text-red-500'>Not Available</p>}


                <div className="card-actions">

                    <label
                        htmlFor="book-modal"
                        disabled={slots.length === 0}
                        onClick={() => setSelectedTreatment(treatment)} className="btn modal-button btn border-0  bg-gradient-to-r from-secondary to-primary text-white font-bol">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Treatment;