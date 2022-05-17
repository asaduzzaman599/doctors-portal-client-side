import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { auth } from '../../firebase.init';
import DashBoardTitle from '../Shared/Common/DashBoardTitle';
import Loading from '../Shared/Common/Loading';

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
        </div>
    );
};

export default AllDoctors;