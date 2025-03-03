import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import imag1 from '../../assets/images/bow-ite.jpg'
import imag2 from '../../assets/images/shoppihng.webp'

const Descover = () => {
    return (
        <div className='w-10/12 mx-auto py-20'>
            <div className='flex flex-col lg:flex-row gap-4 text-white'>

                {/* LEFT CARD */}
                <div className='bg-[#002A43] lg:w-1/2 p-3 lg:p-8 rounded-md flex flex-col lg:flex-row items-center justify-between'>
                    <div className='space-y-3'>
                        <h1>Don't miss opportunity!</h1>
                        <h1 className='text-2xl lg:text-4xl'>Discover offer <br /> 2025 collection</h1>
                        <h1 className='pt-4 flex items-center gap-2'>shop now <FaArrowRight></FaArrowRight></h1>
                    </div>
                    <div>
                        <img className='w-80 lg:w-60 h-44 rounded-md' src={imag1} alt="" />
                    </div>
                </div>


                {/* RIGHT CARD */}
                <div className='bg-[#6BA9F4] lg:w-1/2 rounded-md p-3 lg:p-8 flex flex-col lg:flex-row items-center justify-between'>
                    <div>
                        <h1>Don't miss opportunity!</h1>
                        <h1 className='text-2xl lg:text-4xl'>Discover offer <br /> 2025 collection</h1>
                        <h1 className='pt-4 flex items-center gap-2'>shop now <FaArrowRight></FaArrowRight></h1>
                    </div>
                    <div>
                        <img className='w-80 lg:w-60 h-44 rounded-md' src={imag2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Descover;
