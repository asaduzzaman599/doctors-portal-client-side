import React from 'react';
import TItle from '../Shared/Common/TItle';
import appointment from './../../assets/images/appointment.png'
import doctor from './../../assets/images/doctor.png'
const Appointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="flex gap-8">
            <div className='flex-1 hidden md:block'>
                <img src={doctor} alt="" className='mt-[-100px]' />
            </div>
            <div className='flex-1 text-left p-6'>
                <TItle textAlign={'text-left'}>Appointment</TItle>
                <h2 className='text-3xl  text-white mb-4'>Make an appointment Today</h2>
                <p className='  text-white '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </section>
    );
};

export default Appointment;