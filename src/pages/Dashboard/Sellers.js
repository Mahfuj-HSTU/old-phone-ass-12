import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Sellers = () => {
    const sellers = useLoaderData();
    const navigate = useNavigate();

    const handleDeleteSeller = seller => {
        const proceed = window.confirm( 'Are your sure, you want to cancel this product?' )
        if ( proceed ) {
            fetch( `http://localhost:5000/users/seller/${ seller._id }`, {
                method: 'delete',
                headers: {
                    authorization: `bearer ${ localStorage.getItem( 'accessToken' ) }`
                }
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        // console.log( data );
                        toast.success( 'Seller deleted successfully' )
                        navigate( '/dashboard/sellers/seller' )
                    }
                } )
        }
    }

    return (
        <div className='mb-14'>
            <h2 className='text-4xl text-blue-800 font-semibold mt-5 mb-10'>All Sellers</h2>
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
                            sellers.map( ( seller, i ) => <tr className="hover" key={ seller._id }>
                                <th>{ i + 1 }</th>
                                <td>{ seller.name }</td>
                                <td>{ seller.email }</td>
                                <td><button onClick={ () => handleDeleteSeller( seller ) } className='btn btn-xs btn-error'>Delete</button></td>
                            </tr> )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;
