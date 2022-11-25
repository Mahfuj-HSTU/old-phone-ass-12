import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard/CategoryCard';

const Category = () => {

    const { data: categories = [], isLoading } = useQuery( {
        queryKey: [ 'categories' ],
        queryFn: () => fetch( 'http://localhost:5000/categories' )
            .then( res => res.json() )
    } )

    if ( isLoading ) {
        <Loading></Loading>
    }

    return (
        <div className='mb-20'>
            <h2 className='text-start text-4xl text-blue-700 font-semibold my-10'>All Products Category</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map( category => <CategoryCard key={ category._id } category={ category }></CategoryCard> )
                }
            </div>
        </div>
    );
};

export default Category;
