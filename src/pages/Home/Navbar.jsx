import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { CiHeart, CiMenuBurger, CiSearch, CiShuffle, CiUser } from 'react-icons/ci';
import { FaPercentage } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col  md:flex-row lg:flex-row justify-between gap-4 '>

                {/* LEFT SIDE */}
                <div className='lg:w-1/2 flex justify-between'>
                    <a className="text-3xl font-bold">Kalni</a>
                    <div>
                        <div className='flex md:hidden lg:hidden'>
                            <CiMenuBurger size={30}></CiMenuBurger>
                            <CiSearch size={30}></CiSearch>
                        </div>
                    </div>

                </div>


                {/* MIDDLE */}
                <div className='w-full hidden lg:flex'>
                    <div className='flex border items-center w-full justify-between'>
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>All Categories</option>
                            <option>Shirt</option>
                            <option>Pant</option>
                            <option>T-shirt</option>
                            <option>Cap</option>
                        </select>
                        <div className='px-1'>|</div>
                        <input type="text" placeholder="Type here" className="input border-none w-full max-w-xs" />
                        <button className="btn bg-[#3B4DF0] rounded-none text-white">search</button>
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className='w-full lg:w-1/2 lg:navbar-end'>
                    <div className='flex gap-1 lg:gap-4 items-center '>
                        <div className='flex items-center'>
                            <CiUser size={30}></CiUser>
                            <h1 className='font-bold text-xs'>Login Account</h1>
                        </div>
                        <div className='flex lg:gap-3'>
                            <CiHeart size={30}></CiHeart>
                            <CiShuffle size={30}></CiShuffle>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BsCart2 size={30}></BsCart2>
                            <div>
                                <h1 className='text-xs'>Your Cart</h1>
                                <h1 className='text-xs'>$0.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4 lg:flex  justify-between items-center hidden font-semibold'>
                <h1 className='flex items-center gap-1'><CiMenuBurger></CiMenuBurger>Browse All Categories</h1>
                <h1><select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>Home</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select></h1>
                <h1><select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>Popular Categories</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select></h1>
                <h1><select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>Product Section</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select></h1>
                <h1><select className="select select-ghost w-full max-w-xs">
                    <option disabled selected>News letter</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select></h1>
                <h1>Contact Us</h1>
                <h1 className='flex items-center gap-1'><FaPercentage size={30} className='bg-red-600 p-1 rounded-full' color='white'></FaPercentage>$20 Of Your First Order</h1>
            </div>

        </div>


    );
}

export default Navbar;
