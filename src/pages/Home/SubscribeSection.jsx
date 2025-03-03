import React from 'react';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';


const SubscribeSection = () => {
    return (
        <div className='bg-[#3B4DF0]'>
            <div className='w-10/12 mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center py-10'>

                <div className='space-y-3 text-white'>
                    
                        <h1 className='uppercase'>sele 20% off all store</h1>
                        <h1 className='text-4xl font-bold'>Susciber our Newsetter</h1>
                   
                </div>

                <div>
                    <div className="join p-4">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                <input type="email" placeholder="Enter Your Email Adress" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn bg-[#3B4DF0] join-item text-white">Subscribe</button>
                    </div>
                </div>

                <div>
                    <FaEnvelopeCircleCheck size={100} color='orange'></FaEnvelopeCircleCheck>
                </div>

            </div>
        </div>
    );
}

export default SubscribeSection;