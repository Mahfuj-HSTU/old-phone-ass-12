import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ( { category } ) => {
    const { name, img, _id } = category;
    return (
        <div>
            <Link to={ `/category/${ _id }` } className="card w-96 shadow-2xl h-64">
                <figure className="px-10 pt-10">
                    <img src={ img } alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{ name }</h2>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
