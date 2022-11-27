import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../../pages/Shared/Loading/Loading';

const AdminRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext )
    const [ isAdmin, isAdminLoading ] = useAdmin( user?.email )
    const location = useLocation();

    if ( loading || isAdminLoading ) {
        return <Loading></Loading>
    }

    if ( user && isAdmin ) {
        return children;
    }
    logOut()
        .then()
        .catch()

    return <Navigate to='/login' state={ { from: location } } replace></Navigate>
};

export default AdminRoute;
