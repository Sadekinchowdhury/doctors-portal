import { React, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import UseAdmin from '../admin/UseAdmin';
import { AuthContext } from '../Context/Authprovide';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="das-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


                </div>
                <div className="drawer-side">
                    <label htmlFor="das-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/product'>Add a products</Link></li>
                        <li><Link to='/dashboard/myproducts'>My products</Link></li>
                        <li><Link to='/dashboard/allusers'>All user</Link></li>



                        {
                            isAdmin && <li><Link to='/dashboard/user'>All user</Link></li>
                        }



                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;