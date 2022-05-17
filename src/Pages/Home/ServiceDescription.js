import React from 'react';
import PrimaryButton from '../Shared/Common/PrimaryButton';
import treatment from './../../assets/images/treatment.png'

const ServiceDescription = () => {
    return (
        <div className="hero min-h-screen mt-20 w-full">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="card-title text-3xl lg:text-6xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceDescription;