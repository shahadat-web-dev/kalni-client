import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { Ri24HoursLine } from 'react-icons/ri';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';


import img1 from '../../assets/images/banner1.png'
import img2 from '../../assets/images/banner2.png'

const Banner = () => {
    return (
        <div>


            <div className='w-10/12 mx-auto'>
                <div>
                    <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className='w-full flex justify-center'>
                                <div className='flex flex-col lg:flex-row items-center'>
                                    <div className='lg:w-1/2'>
                                        <h1 className='lg:text-7xl '>Descover your <br /> perfect stylish and <br /> suited clothed</h1>
                                    </div>
                                    <div className='lg:w-1/2 border-2 bg-[#E8EFF9]'>
                                        <img className='h-96' src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full flex justify-center'>
                                <div className='flex flex-col lg:flex-row items-center'>
                                    <div className='lg:w-1/2'>
                                        <h1 className='lg:text-7xl '>Descover your <br /> perfect stylish and <br /> suited clothed</h1>
                                    </div>
                                    <div className='lg:w-1/2 border-2 bg-[#E8EFF9]'>
                                        <img className='h-96' src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>



            <div className='bg-[#1D2939] text-white'>
                <div className='flex flex-col lg:flex-row gap-4 justify-between w-9/12 mx-auto p-4'>
                    <div className='flex items-center gap-4'>
                        <FaCarSide size={40}></FaCarSide>
                        <div>
                            <h1>Free shipping & Return</h1>
                            <h1>Free shipping on All Orders over $49</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiOutlineDollar size={40}></AiOutlineDollar>
                        <div>
                            <h1>Free shipping & Return</h1>
                            <h1>Free shipping on All Orders over $49</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Ri24HoursLine size={40}></Ri24HoursLine>
                        <div>
                            <h1>Free shipping & Return</h1>
                            <h1>Free shipping on All Orders over $49</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
