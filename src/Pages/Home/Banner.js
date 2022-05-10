import React from 'react';
import chair from './../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen p-24 " >
            <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-6xl font-bold text-accent">Your New   Starts Here</h1>
                    <p className="py-6  text-accent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;