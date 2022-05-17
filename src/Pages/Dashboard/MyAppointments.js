import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Common/Loading';

const MyAppointments = () => {
    const [appointments, setAppoiuntments] = useState([])
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/booking?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        toast.error('Invalid Access')
                        signOut(auth)
                        localStorage.removeItem('access_token')
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.success) {
                        setAppoiuntments(data.appointments)
                    }
                })
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>My Appointments: {appointments.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(({ treatmentName, formattedDate, slot }, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{treatmentName}</td>
                                <td>{formattedDate}</td>
                                <td>{slot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;