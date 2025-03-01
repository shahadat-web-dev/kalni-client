import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { Ri24HoursLine } from 'react-icons/ri';

const Banner = () => {
    return (
        <div>
            <div className='bg-[#1D2939] text-white'>
                <div className='flex justify-between w-9/12 mx-auto p-4'>
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
