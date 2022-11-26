import React from 'react';
import MyBookingModal from './MyBookingModal/MyBookingModal';

const ProductsCard = ( { product } ) => {
    const { name, img, location, resale_price, original_price, used_time, sellers } = product;
    return (
        <div>
            <div className="card w-96 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={ img } alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="card-title text-2xl">{ name }</h2>
                    <h3 className='text-xl'>Area: { location }</h3>
                    <p>Price for sale: <b> { resale_price }$</b> </p>
                    <p>Original Price: <b>{ original_price }$</b> </p>
                    <p className='text-xl font-semibold'>Seller's : { sellers }</p>
                    <p className='text-xl '>{ used_time } used</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal" className="btn btn-primary w-full mt-5">Book Now</label>
                    </div>
                </div>
            </div>
            {
                <MyBookingModal product={ product }></MyBookingModal>
            }
        </div>
    );
};

export default ProductsCard;
