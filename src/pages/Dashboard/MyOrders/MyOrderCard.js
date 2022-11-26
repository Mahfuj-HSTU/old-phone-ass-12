import React from 'react';

const MyOrderCard = ( { order } ) => {
    const { name, img, resale_price } = order;
    return (
        <div>
            <div className="card w-96 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={ img } alt={ name } className="rounded-xl" />
                </figure>
                <div className="card-body text-start">
                    <h2 className="card-title text-2xl">{ name }</h2>
                    <p>Price for sale: <b> { resale_price }$</b> </p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal" className="btn btn-primary w-full mt-5">Pay Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;
