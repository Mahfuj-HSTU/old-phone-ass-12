import React from 'react';
import { HiOutlineTag, HiCurrencyBangladeshi } from "react-icons/hi";
import { ImClock } from "react-icons/im";



const Features = () => {
    return (
        <div className='my-12'>
            <h2 className='text-4xl text-blue-700 font-semibold mb-10'>Sell your phone in 3 Steps</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl my-3"><span ><HiOutlineTag /></span> Check Price</h2>
                        <p>Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl my-3"><span ><ImClock /></span> Schedule Pickup</h2>
                        <p>Book a free pickup from your home or work at a time slot as per your convenience</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl my-3"><span ><HiCurrencyBangladeshi /></span> Get paid instantly</h2>
                        <p>Did we mention you get paid as soon as our executive picks up your device? It’s instant & secure payment all the way!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
