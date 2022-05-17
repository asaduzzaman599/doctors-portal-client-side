import React from 'react';

const Service = ({ serviceInfo }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={serviceInfo.icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceInfo.name}</h2>
                <p>{serviceInfo.description}</p>

            </div>
        </div>
    );
};

export default Service;