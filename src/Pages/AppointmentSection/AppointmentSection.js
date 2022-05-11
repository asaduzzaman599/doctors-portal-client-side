import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableTreatments from './AvailableTreatments';

const AppointmentSection = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableTreatments selected={selected}></AvailableTreatments>
        </div>
    );
};

export default AppointmentSection;