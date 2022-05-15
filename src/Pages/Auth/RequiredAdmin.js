import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Common/Loading';

const RequiredAdmin = ({ children }) => {
    const { admin, isLoading } = useAdmin()
    const navigate = useNavigate()
    if (isLoading) {
        return <Loading></Loading>
    }
    if (!admin) {
        navigate('/dashboard/myappointments')
    }
    return (
        children
    );
};

export default RequiredAdmin;