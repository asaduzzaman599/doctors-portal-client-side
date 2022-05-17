import React from 'react';
import TItle from '../../Shared/Common/TItle';
import quote from './../../../assets/icons/quote.svg'
import Reviews from './Reviews';

const Testimonial = () => {
    return (
        <div className='lg:px-24 m-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <TItle textAlign='text-left'>Testimonial</TItle>
                    <h2 className='text-3xl  text-accent'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-48 mt-32' />
                </div>
            </div>
            <div>
                {<Reviews />}
            </div>

        </div>
    );
};

export default Testimonial;