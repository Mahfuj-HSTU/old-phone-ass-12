import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Sellers = () => {
    const sellers = useLoaderData();

    // console.log( sellers );
    return (
        <div className='mb-14'>
            <h2 className='text-4xl text-blue-800 font-semibold my-10'>All Sellers</h2>
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
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr> )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;
