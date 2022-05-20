import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Loading from '../Shared/Common/Loading';

const AllUsers = () => {
    const [user, loading] = useAuthState(auth)
    // const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
        fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/user?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => {
                /* if (res.status === 401 || res.status === 403) {
                    toast.error('Invalid Access')
                    signOut(auth)
                    localStorage.removeItem('access_token')
                    navigate('/login')
                } */
                return res.json()
            })
    )

    const users = data?.users
    /* useEffect(() => {
        if (user) {
            console.log(user)
            fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/user?email=${user?.email}`, {
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
                        setUsers(data.users)
                    }
                })
        }
    }, [user]) */


    if (loading, isLoading) {
        return <Loading></Loading>
    }

    const makeAdmin = (email) => {
        fetch(`https://doctors-portal-asaduzzaman599.herokuapp.com/user/admin/${email}?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    refetch()
                } else {
                    toast.error('You are not allowed')
                }
            })
    }
    return (
        <div>
            <h3>All User:{users?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users?.map((userInfo, i) => <tr>

                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-5">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={userInfo?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        {userInfo?.name}
                                    </div>
                                </td>

                                <td>{userInfo?.email}</td>
                                <td>
                                    {
                                        userInfo?.role === 'admin' ? <button className="btn btn-xs">Remove Admin</button> : <button className="btn btn-xs" onClick={() => makeAdmin(userInfo?.email)}>Make Admin</button>
                                    }
                                </td>
                                <th>
                                    <button className="btn btn-xs">details</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;