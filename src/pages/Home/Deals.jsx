import React from 'react';


import img1 from '../../assets/images/princess.webp'
import img2 from '../../assets/images/kurta.jpg'
import img3 from '../../assets/images/jecket3.webp'
import img4 from '../../assets/images/top.webp'
import img5 from '../../assets/images/koti.jpeg'
import img6 from '../../assets/images/lehenga.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';


const Deals = () => {
    return (
        <div className='w-10/12 mx-auto my-20 py-10'>
            <div className='flex bg-white justify-between p-3 rounded-md mb-8'>
                <h1 className='text-2xl font-bold'>Deals of the Weeak</h1>
                <h1 className='flex items-center font-semibold gap-2'>View All  <IoIosArrowForward></IoIosArrowForward></h1>
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
                    <div className=" h-auto w-72 bg-white space-y-4 p-3 group rounded-md relative">
                        <figure>
                            <p className='absolute top-4 text-white right-16 p-1 rounded bg-blue-700'>Add wishlist</p>
                            <p className='top-4 right-4 absolute bg-blue-700 rounded-full p-1'><FaHeart size={30} color='white'></FaHeart>
                            </p>
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
                            <h1 className='text-gray-500 font-semibold'>Women's Fashion</h1>
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

export default Deals;
