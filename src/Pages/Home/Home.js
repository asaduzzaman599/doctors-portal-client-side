import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Banner></Banner>
            <Info></Info>
            {<Services></Services>}
            {<Appointment></Appointment>}
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;