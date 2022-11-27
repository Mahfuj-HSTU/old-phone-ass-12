import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const { user } = useContext( AuthContext )

    const { data: products = [], isLoading, refetch } = useQuery( {
        queryKey: [ 'products' ],
        queryFn: () => fetch( `https://old-phone-server.vercel.app/products?email=${ user?.email }`, {
            headers: {
                authorization: `bearer ${ localStorage.getItem( 'accessToken' ) }`
            }
        } )
            .then( res => res.json() )
    } )
    console.log( products );

    const handleDelete = id => {
        const proceed = window.confirm( 'Are your sure, you want to cancel this product?' )
        if ( proceed ) {
            fetch( `https://old-phone-server.vercel.app/products/${ id }`, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    // console.log( data );
                    if ( data.deletedCount > 0 ) {
                        refetch();
                        toast.success( 'Deleted successfully' );
                    }
                } )
        }
    }

    if ( isLoading ) {
        <Loading></Loading>
    }


    return (
        <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {
                products &&
                products?.map( product => <MyProductCard key={ product._id } product={ product } handleDelete={ handleDelete }></MyProductCard> )
            }
        </div>
    );
};

export default MyProduct;
