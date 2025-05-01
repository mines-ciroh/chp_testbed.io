import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white font-[Poppins]">
            <div className="container h-[75] flex justify-between items-center">

              
                <div className=" flex space-x-2 items-center text-left">
                    <img src="/cirohlogo.png" alt="Logo" className='h-20 w-20' />
                    <a href="/">Hydrologic Prediction Testbed</a>
                </div>

                <ul className="flex space-x-7">
                    <li>
                        <a href="/" className="hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/protocols" className="hover:text-gray-400">
                            Protocols
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-400">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;