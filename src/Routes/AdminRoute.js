import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import UseAdmin from '../admin/UseAdmin';
import { AuthContext } from '../Context/Authprovide';

const AdminRoutes = ({ children }) => {
    const location = useLocation()

    const { user } = useContext(AuthContext)
    const [isAdmin, isLoading] = UseAdmin(user?.email)

    if (isLoading) {
        return <p>looding...</p>
    }

    if (user && isAdmin) {
        return children;
    }
    <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;