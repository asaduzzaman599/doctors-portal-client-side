import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { auth } from '../../firebase.init';
import DashBoardTitle from '../Shared/Common/DashBoardTitle';
import Loading from '../Shared/Common/Loading';
import Doctor from './Doctor';

const AllDoctors = () => {
    const [user, loading] = useAuthState(auth)
    const { data: doctors, isLoading } = useQuery('Doctors', () => fetch(`http://localhost:5000/doctor?email=${user?.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then(res => res.json()))
    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <DashBoardTitle>All Doctors : {doctors?.length}</DashBoardTitle>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialization</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDoctors;