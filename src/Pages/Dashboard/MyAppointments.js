import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(({ treatmentName, formattedDate, slot, paid, price, _id }, i) => <tr key={_id} >
                                <th>{i + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{treatmentName}</td>
                                <td>{formattedDate}</td>
                                <td>{slot}</td>
                                <td>{(!paid && price) && <Link to={`/dashboard/payment/${_id}`} className='btn btn-success'>Pay Now</Link>}
                                    {(paid && price) && <p>Paid</p>}

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;