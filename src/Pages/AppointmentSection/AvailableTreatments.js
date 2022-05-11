import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import TItle from '../Shared/Common/TItle';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const AvailableTreatments = ({ selected }) => {
    const [treatments, setTreatments] = useState([])
    const [selectedTreatment, setSelectedTreatment] = useState(null)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-72/main/public/services.json")
            .then(res => res.json())
            .then(data => setTreatments(data))
    }, [])

    console.log(selectedTreatment)
    return (
        <div>

            <TItle>Available Appointments on {format(selected, 'PP')}</TItle>

            <div className='grid md:grid-cols-3 gap-10 mt-16 p-12'>
                {
                    treatments.map(treatment => <Treatment key={treatment._id} treatment={treatment}
                        setSelectedTreatment={setSelectedTreatment}
                    ></Treatment>)
                }
            </div>
            {selectedTreatment && <BookingModal treatment={selectedTreatment}
                date={selected}
                setSelectedTreatment={setSelectedTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableTreatments;