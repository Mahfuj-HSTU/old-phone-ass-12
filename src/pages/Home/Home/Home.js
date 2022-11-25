import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <Category></Category>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;
