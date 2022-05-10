import React from 'react';
import TItle from '../Shared/Common/TItle';
import cavity from './../../assets/images/cavity.png'
import fluoride from './../../assets/images/fluoride.png'
import whitening from './../../assets/images/whitening.png'
import Service from './Service';
import ServiceDescription from './ServiceDescription';

const Services = () => {
    const serviceInfos = [
        { _id: 1, title: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', icon: fluoride },
        { _id: 2, title: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', icon: cavity },
        { _id: 3, title: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', icon: whitening },
    ]
    return (
        <div className='p-24'>
            <TItle>OUR SERVICES</TItle>
            <h2 className='text-3xl text-center text-accent'>Services We Provide</h2>
            <div className='mt-16 grid md:grid-cols-3 gap-8'>
                {serviceInfos.map(serviceInfo => <Service key={serviceInfo._id} serviceInfo={serviceInfo}></Service>)}
            </div>

            <ServiceDescription></ServiceDescription>
        </div>

    );
};

export default Services;