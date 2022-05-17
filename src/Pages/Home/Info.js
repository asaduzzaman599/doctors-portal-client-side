import React from 'react';
import clock from './../../assets/icons/clock.svg'
import marker from './../../assets/icons/marker.svg'
import phone from './../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    const infos = [
        { _id: 1, title: "Opening Hours", description: 'Lorem Ipsum is simply dummy text of the pri', icon: clock, bgColor: "bg-gradient-to-r from-secondary to-primary" },
        { _id: 2, title: "Visit our location", description: 'Brooklyn, NY 10036, United States', icon: marker, bgColor: "bg-accent" },
        { _id: 3, title: "Contact us now", description: '+000 123 456789', icon: phone, bgColor: "bg-gradient-to-r from-secondary to-primary" },
    ]
    return (
        <div className='grid md:grid-cols-3 lg:px-24 gap-8 w-full'>
            {
                infos.map(cardInfo => <InfoCard key={cardInfo._id} cardInfo={cardInfo}></InfoCard>)
            }
        </div>
    );
};

export default Info;