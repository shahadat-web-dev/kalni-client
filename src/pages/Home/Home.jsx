import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ProductSection from './ProductSection';

const Home = () => {
    return (
        <div className='bg-[#F1F5F6]'>
            <Navbar></Navbar>
            <Banner></Banner>
            <ProductSection></ProductSection>
        </div>
    );
}

export default Home;