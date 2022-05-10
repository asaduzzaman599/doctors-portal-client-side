import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>

                <div className='mt-4 flex gap-4'>
                    <div class="avatar ">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100  ">
                            <img src={review.img} />
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold'> {review.name}</h2>
                        <p> {review.state}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;