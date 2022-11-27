import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Buyers = () => {
    const buyers = useLoaderData();
    const navigate = useNavigate();

    const handleDeleteBuyer = buyer => {
        const proceed = window.confirm( 'Are your sure, you want to cancel this product?' )
        if ( proceed ) {
            fetch( `https://old-phone-server.vercel.app/users/buyer/${ buyer._id }`, {
                method: 'delete',
                headers: {
                    authorization: `bearer ${ localStorage.getItem( 'accessToken' ) }`
                }
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        // console.log( data );
                        toast.success( 'Buyer deleted successfully' )
                        navigate( '/dashboard/buyers/Buyer' )
                    }
                } )
        }
    }


    return (
        <div className='mb-14'>
            <h2 className='text-4xl text-blue-800 font-semibold mt-5 mb-10'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map( ( buyer, i ) => <tr className="hover" key={ buyer._id }>
                                <th>{ i + 1 }</th>
                                <td>{ buyer.name }</td>
                                <td>{ buyer.email }</td>
                                <td><button onClick={ () => handleDeleteBuyer( buyer ) } className='btn btn-xs btn-error'>Delete</button></td>
                            </tr> )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;
