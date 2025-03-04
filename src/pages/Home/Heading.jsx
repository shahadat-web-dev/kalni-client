import React from 'react';

import Marquee from "react-fast-marquee";
import { FaBolt } from 'react-icons/fa6';

const Heading = () => {
    return (
        <div className='bg-[#3B4DF0] text-white p-2'>
            <Marquee>                
               
                <p className='flex items-center gap-2 font-semibold mr-16'><FaBolt></FaBolt>Specila offer : enjoy 3 months of shopify for $1/month.</p>
                <p className='flex items-center gap-2 font-semibold mr-14'><FaBolt></FaBolt>Specila offer : enjoy 3 months of shopify for $1/month.</p>
                <p className='flex items-center gap-2 font-semibold mr-14'><FaBolt></FaBolt>Specila offer : enjoy 3 months of shopify for $1/month.</p>
                <p className='flex items-center gap-2 font-semibold mr-14'><FaBolt></FaBolt>Specila offer : enjoy 3 months of shopify for $1/month.</p>
            </Marquee>
        </div>
    );
}

export default Heading;
