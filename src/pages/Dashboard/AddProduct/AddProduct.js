import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [ product, setProduct ] = useState( {} )
    const { user } = useContext( AuthContext )
    const navigate = useNavigate();
    // console.log( user?.email );

    const { data: categories = [] } = useQuery( {
        queryKey: [ 'categories' ],
        queryFn: () => fetch( 'https://old-phone-server.vercel.app/categories' )
            .then( res => res.json() )
    } )

    const handleAddProduct = event => {
        event.preventDefault();
        // console.log( product );
        const url = ( 'https://old-phone-server.vercel.app/products' )
        fetch( url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( product )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.acknowledged ) {
                    toast.success( 'Product added successfully' )
                    event.target.reset();
                    navigate( '/dashboard/myProduct' )
                }
                console.log( data )
            } )
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const email = user?.email;
        const date = new Date().toLocaleString()
        const newProduct = { ...product, email, date };
        newProduct[ field ] = value;
        setProduct( newProduct )
    }


    return (
        <div className="hero w-full my-10">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold">Add Product </h1>
                <form onSubmit={ handleAddProduct } className="card-body">

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='sellers' placeholder="Your name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='name' placeholder="Product name" className="input input-bordered" required />
                    </div>

                    <select onChange={ handleInputBlur } className="select select-bordered w-full max-w-xs" name='brand' required>
                        <option value={ 0 } disabled selected required>Select Product Category</option>
                        {
                            categories.map( ( category, i ) => <option key={ category._id } value={ category.brand } required>{ category.brand }</option> )
                        }
                    </select>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='img' placeholder="Enter image url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='location' placeholder="Enter location" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='resale_price' placeholder="Give resale-price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='original_price' placeholder="Give original-price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='used_time' placeholder="Used times" className="input input-bordered" required />
                    </div>

                    <select onChange={ handleInputBlur } className="select select-bordered w-full max-w-xs" name='condition' required>
                        <option value={ 0 } disabled selected>Product Condition</option>
                        <option value={ 'Excellent' }>Excellent</option>
                        <option value={ 'Good' }>Good</option>
                        <option value={ 'Fair' }>Fair</option>
                    </select>

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='phone' placeholder="Mobile number" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input onChange={ handleInputBlur } className="btn btn-primary" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
