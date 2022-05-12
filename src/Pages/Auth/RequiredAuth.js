import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    console.log('hello')
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return (
        children
    );
};

export default RequiredAuth;