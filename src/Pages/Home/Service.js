import React from 'react';

const Service = ({ serviceInfo }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={serviceInfo.icon} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{serviceInfo.name}</h2>
                <p>{serviceInfo.description}</p>

            </div>
        </div>
    );
};

export default Service;