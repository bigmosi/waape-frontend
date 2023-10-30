"use client"
import Link from 'next/link';
import 'globals.css';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowUpLeft } from "react-icons/fi";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-black fixed w-full top-0 z-50 ${isMenuOpen ? '' : 'border-b'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="transform transition-transform duration-300 text-white ease-in-out hover:scale-110">
          <div className='flex'>
            <div className='border rounded-full p-0.5 bg-white text-black mr-1'>
              <FiArrowUpLeft />
            </div>
            Raft
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} color="white" />
            ) : (
              <FaBars size={24} color="white" />
            )}
          </button>
        </div>
        {isMenuOpen ? (
          <ul className="md:hidden absolute top-0 right-0 left-0 bg-graycolor">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <FaTimes size={24} color="white" />
            </button>
            <li className='mt-10 text-center mt-20'>
              <Link href="/solution" className="text-ghostwhite text-lg hover:text-gray-300 p-3" onClick={toggleMenu}>
                Solutions
              </Link>
            </li>
            <li className='mt-10 text-center'>
              <Link href="/learn" className="text-ghostwhite text-lg hover:text-gray-300 p-3" onClick={toggleMenu}>
                learn
              </Link>
            </li>
            <li className='mt-10 pb-10 text-center'>
              <Link href="/about" className="text-ghostwhite text-lg hover:text-gray-300" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <div className="mt-6 text-center pb-5">
              <Link href="/login" className="text-ghostwhite text-lg hover:text-gray-300 mr-3">
                Login
              </Link>
              <button className='text-white rounded-full pl-4 pr-4 bg-green-900 mt-2'>Get Started</button>
            </div>
          </ul>
        ) : (
          <div className='hidden w-3/5 md:flex justify-around'>
            <ul className="md:flex flex md:w-3/5  md:space-x-12">
              <li>
                <Link href="/solution" className="text-ghostwhite text-lg hover:text-gray-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-ghostwhite text-lg hover:text-gray-300">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ghostwhite text-lg hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
            <div className="flex md:space-x-12">
              <Link href="/login" className="text-ghostwhite text-lg hover:text-gray-300">
                Login
              </Link>
              <button className='text-white rounded-full pl-4 pr-4 bg-green-900'>Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
