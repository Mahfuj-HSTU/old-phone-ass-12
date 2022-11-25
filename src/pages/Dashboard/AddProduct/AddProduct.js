import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const AddProduct = () => {
    const [ product, setProduct ] = useState( {} )
    const [ id, setId ] = useState( null )

    const { data: categories = [] } = useQuery( {
        queryKey: [ 'categories' ],
        queryFn: () => fetch( 'http://localhost:5000/categories' )
            .then( res => res.json() )
    } )

    const handleAddProduct = event => {
        event.preventDefault();
        // console.log( product )
        const url = ( `http://localhost:5000/categories/${ id }` )
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
                }
                // console.log( data )
            } )
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newProduct = { ...product };
        newProduct[ field ] = value;
        setProduct( newProduct )
    }


    return (
        <div className="hero w-full my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold">Add Services </h1>
                <form onSubmit={ handleAddProduct } className="card-body">

                    <div className="form-control">
                        <input onChange={ handleInputBlur } type="text" name='name' placeholder="Product name" className="input input-bordered" required />
                    </div>

                    <select className="select select-bordered w-full max-w-xs" required>
                        <option value={ 0 } disabled selected>Select Product Category</option>
                        {
                            categories.map( ( category, i ) => <option key={ category._id } setId={ category._id } value={ i + 1 }>{ category.name }</option> )
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

                    <div className="form-control mt-6">
                        <input onChange={ handleInputBlur } className="btn btn-primary" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
