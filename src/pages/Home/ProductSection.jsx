import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../assets/images/jecket1.jpg'
import img2 from '../../assets/images/jecket2.jpeg'
import img3 from '../../assets/images/jecket3.webp'
import img4 from '../../assets/images/top.webp'
import img5 from '../../assets/images/blezer.jpeg'
import img6 from '../../assets/images/lehenga.jpg'


import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

const ProductSection = () => {


    return (
        <div className='w-11/12 mx-auto my-20 py-10'>
            <div className='flex bg-white justify-between p-2 rounded-md mb-8'>
                <h1 className='text-2xl font-bold'>Product Section</h1>
                <h1 className='flex items-center font-semibold gap-2'>View All Products <IoIosArrowForward></IoIosArrowForward></h1>
            </div>
            <Swiper
                spaceBetween={30}
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
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                    1920: {
                        slidesPerView: 5,
                    }
                }}
            >


                <SwiperSlide data-hash="slide2">
                    <div className=" h-auto w-72 bg-white space-y-4 p-3 group rounded-md">
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
                            <button className='btn btn-primary border-none w-full group-hover:bg-red-500'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <div className=" h-auto w-72 bg-white space-y-4  p-3 group rounded-md">
                        <figure>
                            <img
                                className='h-52 w-full rounded-md'
                                src={img6}
                                alt="Shoes" />
                        </figure>
                        <div className="space-y-3">
                            <p className='font-bold'>Exploring the Intricate Art of Dressmaking and How Fashion Shapes Personal Identity</p>
                            <h1 className='text-gray-500 font-semibold'>Men's Fashion</h1>
                            <div className='flex gap-4 items-center'>
                                <h1 className='text-xl font-bold text-red-600'>$800.80</h1>
                                <h1 className='text-gray-400 text-xs'>$800.00</h1>
                            </div>
                            <button className='btn btn-primary border-none w-full group-hover:bg-red-500'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <div className=" h-auto w-72 bg-white space-y-4  p-3 group rounded-md">
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
                            <button className='btn btn-primary border-none w-full group-hover:bg-red-500'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <div className=" h-auto w-72 bg-white space-y-4  p-3 group rounded-md">
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
                            <button className='btn btn-primary border-none w-full group-hover:bg-red-500'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <div className=" h-auto w-72 bg-white space-y-4  p-3 group rounded-md">
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
                            <button className='btn btn-primary border-none w-full group-hover:bg-red-500'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <div className=" h-auto w-72 bg-white space-y-4  p-3 group rounded-md">
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
                            <button className='btn btn-primary border-none w-full group-hover:bg-red-500'><FiShoppingCart></FiShoppingCart>Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProductSection;
