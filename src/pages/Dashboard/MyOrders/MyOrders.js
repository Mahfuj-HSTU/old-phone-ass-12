import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {

    const { data: orders = [], isLoading } = useQuery( {
        queryKey: [ 'orders' ],
        queryFn: () => fetch( 'https://old-phone-server.vercel.app/orders' )
            .then( res => res.json() )
    } )

    if ( isLoading ) {
        <Loading></Loading>
    }

    return (
        <div className='mt-5'>
            <h2 className='text-4xl text-blue-700 font-semibold'>Your Orders</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    orders.map( order => <MyOrderCard key={ order._id } order={ order }></MyOrderCard> )
                }
            </div>
        </div>
    );
};

export default MyOrders;
