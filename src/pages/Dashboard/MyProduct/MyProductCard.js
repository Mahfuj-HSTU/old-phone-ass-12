import React from 'react';

const MyProductCard = ( { product, handleDelete } ) => {
    const { img, name, resale_price, original_price, _id } = product;

    return (
        <div className="card w-96 shadow-2xl">
            <div className='flex justify-end pt-3 pr-3'>
                <button onClick={ () => handleDelete( _id ) } className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <figure className="px-10 pt-10">
                <img src={ img } alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
                <h2 className="card-title text-2xl">{ name }</h2>
                <p>Price for sale: <b> { resale_price }$</b> </p>
                <p>Original Price: <b>{ original_price }$</b> </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-5">Advertise</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;
