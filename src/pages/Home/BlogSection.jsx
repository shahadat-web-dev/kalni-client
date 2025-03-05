import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import image1 from '../../assets/images/boy1.jpeg'
import image2 from '../../assets/images/boy2.jpeg'
import image3 from '../../assets/images/boy3.jpeg'
import { FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
    return (
        <div className='w-10/12 mx-auto my-20 py-10'>
            <div>
                <div className='flex flex-col lg:flex-row gap-4 bg-white justify-between p-3 rounded-md mb-8'>
                    <h1 className='text-2xl font-bold'>From our Blog</h1>
                    <h1 className='flex items-center font-semibold gap-2'>View All Products <IoIosArrowForward></IoIosArrowForward></h1>
                </div>

                <div className='grid md:grid-cols-3 lg:grid-cols-5 w-full gap-6'>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                            className='w-full h-60'
                                src={image1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">by jhon </h2>
                            <p>Crafting timeless elegance with a touch of modern flair.</p>
                            <div className="card-actions justify-center">
                                <h1 className='flex gap-2 items-center font-semibold text-xl'>Read more <FaArrowRight></FaArrowRight></h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                            className='w-full h-60'
                                src={image2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">by jhon </h2>
                            <p>Crafting timeless elegance with a touch of modern flair.</p>
                            <div className="card-actions justify-center">
                                <h1 className='flex gap-2 items-center font-semibold text-xl'>Read more <FaArrowRight></FaArrowRight></h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                            className='w-full h-60'
                                src={image3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">by jhon </h2>
                            <p>Crafting timeless elegance with a touch of modern flair.</p>
                            <div className="card-actions justify-center">
                                <h1 className='flex gap-2 items-center font-semibold text-xl'>Read more <FaArrowRight></FaArrowRight></h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                            className='w-full h-60'
                                src={image1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">by jhon </h2>
                            <p>Crafting timeless elegance with a touch of modern flair.</p>
                            <div className="card-actions justify-center">
                                <h1 className='flex gap-2 items-center font-semibold text-xl'>Read more <FaArrowRight></FaArrowRight></h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img
                            className='w-full h-60'
                                src={image1}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">by jhon </h2>
                            <p>Crafting timeless elegance with a touch of modern flair.</p>
                            <div className="card-actions justify-center">
                                <h1 className='flex gap-2 items-center font-semibold text-xl'>Read more <FaArrowRight></FaArrowRight></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
