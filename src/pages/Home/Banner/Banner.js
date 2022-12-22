import React from 'react';
import banner from '../../../images/banner.webp'
import './banner.css'

const Banner = () => {

    return (

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={ banner } alt="" className='w-full rounded-xl' />
                </div>
                <div className="absolute transform translate-y-48 inset-x-1/4 top-1/3 text-center text-white">
                    <h1 className='text-2xl md:text-4xl lg:text-4xl mb-3'>Get your dream phone easy</h1>
                    <p className='text-base md:text-lg lg:text-xl'>High quality product delivery we ensure. chose your phone and buy without any confusion</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
