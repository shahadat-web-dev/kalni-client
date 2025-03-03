import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white py-20'>
            <footer className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
                <aside>
                   <h1 className='text-4xl font-bold'>Dream Developer</h1>
                </aside>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">My Account</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Talk to Us</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
