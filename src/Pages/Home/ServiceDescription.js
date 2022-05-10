import React from 'react';
import PrimaryButton from '../Shared/Common/PrimaryButton';
import treatment from './../../assets/images/treatment.png'

const ServiceDescription = () => {
    return (
        <div class="hero min-h-screen mt-20">
            <div class="hero-content flex-col lg:flex-row gap-8">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="card-title text-6xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceDescription;