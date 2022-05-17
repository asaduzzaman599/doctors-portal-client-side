import React from 'react';
import PrimaryButton from '../Shared/Common/PrimaryButton';
import chair from './../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen lg:p-24 " >
            <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-6xl font-bold text-accent">Your New   Starts Here</h1>
                    <p className="py-6  text-accent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton >Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;