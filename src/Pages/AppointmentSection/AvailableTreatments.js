import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Common/Loading';
import TItle from '../Shared/Common/TItle';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const AvailableTreatments = ({ selected }) => {
    // const [treatments, setTreatments] = useState([])
    const [selectedTreatment, setSelectedTreatment] = useState(null)

    const formattedDate = format(selected, 'PP')
    const { isLoading, error, data: treatments, refetch } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/treatment?date=${formattedDate}`).then(res =>
            res.json()
        )
    )
    /* useEffect(() => {
        fetch(`http://localhost:5000/treatment?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setTreatments(data))
    }, [selected]) */

    if (isLoading) { return <Loading></Loading> }
    console.log(selectedTreatment)
    return (
        <div>

            <TItle>Available Appointments on {formattedDate}</TItle>

            <div className='grid md:grid-cols-3 gap-10 mt-16 p-12'>
                {
                    treatments?.map(treatment => <Treatment key={treatment._id} treatment={treatment}
                        setSelectedTreatment={setSelectedTreatment}
                    ></Treatment>)
                }
            </div>
            {selectedTreatment && <BookingModal treatment={selectedTreatment}
                date={selected}
                setSelectedTreatment={setSelectedTreatment}
                refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableTreatments;