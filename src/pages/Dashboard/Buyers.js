import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Buyers = () => {
    const buyers = useLoaderData();

    console.log( buyers );
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
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr> )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;
