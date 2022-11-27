import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';


const Products = () => {
    const products = useLoaderData();

    return (
        <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 '>
            {
                products.length ?
                    products.map( ( product, i ) => <ProductsCard key={ i } product={ product }></ProductsCard> )
                    :
                    <h2 className=' text-4xl text-red-700 font-semibold'>Sorry!! No products is available</h2>
            }
        </div>
    );
};

export default Products;
