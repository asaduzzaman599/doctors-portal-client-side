import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Common/Loading';

const Dashboard = () => {
    const { admin, isLoading } = useAdmin()

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col  p-10">
                {/* <!-- Page content here --> */}
                <h3 className="text-3xl font-semibold text-green-800">Welcome to Dashboard</h3>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                    {/*  <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/myappointments'>My Appointments</Link></li>
                    <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
                    {
                        admin && <li><Link to='/dashboard/users'>All Users</Link></li>
                    }
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;