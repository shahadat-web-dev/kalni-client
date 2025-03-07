import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HashNavigation, Navigation, Pagination } from 'swiper/modules';


import img1 from '../../assets/images/bow-ite.jpg'
import img2 from '../../assets/images/shirt.jpg'
import img3 from '../../assets/images/Girls-tops.jpg'
import img4 from '../../assets/images/short.webp'
import img5 from '../../assets/images/black.webp'
import img6 from '../../assets/images/shirt-removebg-preview.png'


import { FiShoppingCart } from 'react-icons/fi';

const BestPrice = () => {
    return (
        <div className='w-10/12 mx-auto mt-24'>
            <div className='flex flex-col lg:flex-row bg-white justify-between p-3 rounded-md mb-8'>
                <h1 className='text-2xl font-bold'>Get Our Best Price</h1>
                <div className='flex flex-col lg:flex-row items-center gap-2'>
                    <h1 className='flex items-center font-semibold gap-2'>hurry up ! Offer ends in : </h1>
                    <div className='flex gap-1'>
                        <h1 className='bg-red-600 btn text-white'>00</h1>
                        <h1 className='bg-red-600 btn text-white'>19</h1>
                        <h1 className='bg-red-600 btn text-white'>60</h1>
                        <h1 className='bg-red-600 btn text-white'>40</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>

                {/* IMAGE */}
                <div className='lg:w-1/5 border h-auto bg-[#FFEFE8]'>
                    <div>
                        <div className='space-y-3 p-4'>
                            <h1 className='text-2xl  font-bold'>Clothing & Apparel</h1>
                            <h1 className='uppercase'>Sale up to X <span className='text-red-500'>30% off</span></h1>
                            <button className="btn btn-neutral mt-8">shop now</button>
                        </div>
                        <div>
                            <img className=' -rotate-45' src={img6} alt="" />
                        </div>
                    </div>
                </div>


                {/* CAROUSEL */}
                <div className='lg:w-3/4'>
                    <Swiper
                        hashNavigation={{
                            watchState: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, HashNavigation]}
                        className="mySwiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >


                        <SwiperSlide data-hash="slide2">
                            <div className="h-auto w-full bg-white space-y-4 p-3 rounded-md">
                                <figure>
                                    <img
                                        className='h-52 w-full rounded-md'
                                        src={img1}
                                        alt="Shoes" />
                                </figure>
                                <div className="space-y-3">
                                    <p className='font-bold'>Exploring the Intricate Art of Dressmaking and How Fashion Shapes Personal Identity</p>
                                    <h1 className='text-gray-500 font-semibold'>Men's Fashion</h1>
                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl font-bold text-red-600'>$800.80</h1>
                                        <h1 className='text-gray-400 text-xs'>$800.00</h1>
                                    </div>
                                    <button className='btn btn-primary border-none w-full'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide2">
                            <div className=" h-auto w-full bg-white space-y-4 p-3 group rounded-md">
                                <figure>
                                    <img
                                        className='h-52 w-full rounded-md'
                                        src={img2}
                                        alt="Shoes" />
                                </figure>
                                <div className="space-y-3">
                                    <p className='font-bold'>Exploring the Intricate Art of Dressmaking and How Fashion Shapes Personal Identity</p>
                                    <h1 className='text-gray-500 font-semibold'>Men's Fashion</h1>
                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl font-bold text-red-600'>$800.80</h1>
                                        <h1 className='text-gray-400 text-xs'>$800.00</h1>
                                    </div>
                                    <button className='btn btn-primary border-none w-full'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide2">
                            <div className=" h-auto w-full bg-white space-y-4 p-3 group rounded-md">
                                <figure>
                                    <img
                                        className='h-52 w-full rounded-md'
                                        src={img3}
                                        alt="Shoes" />
                                </figure>
                                <div className="space-y-3">
                                    <p className='font-bold'>Exploring the Intricate Art of Dressmaking and How Fashion Shapes Personal Identity</p>
                                    <h1 className='text-gray-500 font-semibold'>Men's Fashion</h1>
                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl font-bold text-red-600'>$800.80</h1>
                                        <h1 className='text-gray-400 text-xs'>$800.00</h1>
                                    </div>
                                    <button className='btn btn-primary border-none w-full'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide2">
                            <div className=" h-auto w-full bg-white space-y-4 p-3 group rounded-md">
                                <figure>
                                    <img
                                        className='h-52 w-full rounded-md'
                                        src={img4}
                                        alt="Shoes" />
                                </figure>
                                <div className="space-y-3">
                                    <p className='font-bold'>Exploring the Intricate Art of Dressmaking and How Fashion Shapes Personal Identity</p>
                                    <h1 className='text-gray-500 font-semibold'>Men's Fashion</h1>
                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl font-bold text-red-600'>$800.80</h1>
                                        <h1 className='text-gray-400 text-xs'>$800.00</h1>
                                    </div>
                                    <button className='btn btn-primary border-none w-full'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide data-hash="slide2">
                            <div className=" h-auto w-full bg-white space-y-4 p-3 group rounded-md">
                                <figure>
                                    <img
                                        className='h-52 w-full rounded-md'
                                        src={img5}
                                        alt="Shoes" />
                                </figure>
                                <div className="space-y-3">
                                    <p className='font-bold'>Exploring the Intricate Art of Dressmaking and How Fashion Shapes Personal Identity</p>
                                    <h1 className='text-gray-500 font-semibold'>Men's Fashion</h1>
                                    <div className='flex gap-4 items-center'>
                                        <h1 className='text-xl font-bold text-red-600'>$800.80</h1>
                                        <h1 className='text-gray-400 text-xs'>$800.00</h1>
                                    </div>
                                    <button className='btn btn-primary border-none w-full'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default BestPrice;
