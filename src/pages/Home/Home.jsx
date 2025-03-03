import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ProductSection from './ProductSection';
import BestPrice from './BestPrice';
import Descover from './Descover';
import Footer from './Footer';
import Deals from './Deals';
import BlogSection from './BlogSection';
import SubscribeSection from './SubscribeSection';

const Home = () => {
    return (
        <div className='bg-[#F1F5F6]'>
            <Navbar></Navbar>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <BestPrice></BestPrice>
            <Descover></Descover>
            <Deals></Deals>
            <BlogSection></BlogSection>
            <SubscribeSection></SubscribeSection>
            <Footer></Footer>

{/* 42096 */}

        </div>
    );
}

export default Home;