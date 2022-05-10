import React from 'react';
import people1 from './../../../assets/images/people1.png'
import people2 from './../../../assets/images/people2.png'
import people3 from './../../../assets/images/people3.png'
import Review from './Review';
const Reviews = () => {
    const reviews = [
        { _id: 1, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: people1, name: "Winson Herry", state: "California" },
        { _id: 2, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: people2, name: "Winson Herry", state: "California" },
        { _id: 3, review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: people3, name: "Winson Herry", state: "California" },
    ]
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;