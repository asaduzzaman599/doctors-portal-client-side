import React from 'react';

const InfoCard = ({ cardInfo }) => {
    return (
        <div class={`card card-side ${cardInfo.bgColor} shadow-xl px-6 text-white`}>
            <figure><img src={cardInfo.icon} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">{cardInfo.title}</h2>
                <p>{cardInfo.description}</p>

            </div>
        </div>
    );
};

export default InfoCard;