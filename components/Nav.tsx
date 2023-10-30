import Link from 'next/link';
import 'globals.css';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-army fixed w-full top-0 z-50 ${isMenuOpen ? 'h-20' : 'h-20'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="transform transition-transform duration-300 text-white ease-in-out hover:scale-110">
          Raft
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} color="white"/>
            ) : (
              <FaBars size={24} color="white" />
            )}
          </button>
        </div>
        {isMenuOpen ? (
          <ul className="md:hidden absolute top-0 right-0 left-0 bg-army">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <FaTimes size={24} color="white" />
            </button>
            <li className='mt-10 text-center border-t mt-20'>
              <Link href="/" className="text-ghostwhite text-lg hover:text-gray-300 p-3" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className='mt-10 text-center border-t'>
              <Link href="/about" className="text-ghostwhite text-lg hover:text-gray-300 p-3" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className='mt-10 text-center border-t'>
              <Link href="/services" className="text-ghostwhite text-lg hover:text-gray-300" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className='mt-10 text-center border-t'>
              <Link href="/portfolio" className="text-ghostwhite text-lg hover:text-gray-300" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li className='mt-10 text-center border-t'>
              <Link href="/contact" className="text-ghostwhite text-lg hover:text-gray-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex space-x-8 items-center md:space-x-12">
            <li>
              <Link href="/" className="text-ghostwhite text-lg hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ghostwhite text-lg hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-ghostwhite text-lg hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-ghostwhite text-lg hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ghostwhite text-lg hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
