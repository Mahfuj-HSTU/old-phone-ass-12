import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loading from '../../pages/Shared/Loading/Loading';

const BuyerRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext )
    const [ isBuyer, isBuyerLoading ] = useBuyer( user?.email )
    const location = useLocation();

    if ( loading || isBuyerLoading ) {
        return <Loading></Loading>
    }

    if ( user && isBuyer ) {
        return children;
    }
    logOut()
        .then()
        .catch()

    return <Navigate to='/login' state={ { from: location } } replace></Navigate>
};

export default BuyerRoute;
