import React from 'react';
import PrimaryButton from '../Shared/Common/PrimaryButton';
import TItle from '../Shared/Common/TItle';
import appointment from './../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="p-6">
            <TItle>Contact Us</TItle>
            <h2 className='text-3xl  text-white text-center'>Stay connected with us</h2>
            <form action="" className='flex flex-col gap-4 md:w-2/4 mx-auto mt-4'>
                <input type="text" placeholder='Email Address' className='p-4 rounded-lg' />
                <input type="text" placeholder='Subject' className='p-4 rounded-lg' />
                <textarea type="text" placeholder='Your message' className='p-4 rounded-lg' />
                <div className='text-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>

        </section>
    );
};

export default ContactUs;