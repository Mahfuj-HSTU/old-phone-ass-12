import React from 'react';

const CategoryCard = ( { category } ) => {
    const { name, img } = category;
    return (
        <div>
            <button className="card w-96 bg-base-100 shadow-2xl h-64">
                <figure className="px-10 pt-10">
                    <img src={ img } alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{ name }</h2>
                </div>
            </button>
        </div>
    );
};

export default CategoryCard;
