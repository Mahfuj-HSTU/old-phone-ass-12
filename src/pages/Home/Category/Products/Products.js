import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';


const Products = () => {
    const products = useLoaderData();

    return (
        <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
            {
                products.map( ( product, i ) => <ProductsCard key={ i } product={ product }></ProductsCard> )
            }
        </div>
    );
};

export default Products;
