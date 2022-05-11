import React from 'react';

const Treatment = ({ treatment, setSelectedTreatment }) => {
    const { name, slots } = treatment;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">

            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{slots[0]}</p>
                {slots.length > 0
                    ? <p className='text-sm'>{`${slots.length} Space Available`}</p>
                    : <p className='text-sm text-red-500'>Not Available</p>}

                <div class="card-actions">
                    <button
                        onClick={() => setSelectedTreatment(treatment)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;