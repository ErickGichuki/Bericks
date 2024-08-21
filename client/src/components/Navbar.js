'use client'

import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () =>{
      setOpen(!open);
    };

  return (
    <>
    <nav className='fixed z-50 top-0 left-0 w-full p-6 bg-white '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-lg font-bold'>
            <Link href='/'>Bericks Designs</Link>
        </div>
        <div className='hidden md:flex space-x-6 items-center'>
        <Link href='/about' className='hover:text-purple-600'>About</Link>
        <Link href='/blog' className='hover:text-purple-600'>Blog</Link>
        <Link href='/contact' className='hover:text-purple-600'>Contact Us</Link>
        <Link href='/testimonials' className='hover:text-purple-600'>Testimonials</Link>
        </div>
        <div className='hidden md:flex items-center space-x-6'>
            <Link href='/login' className='hover:text-purple-600'>Login</Link>
            <Link href='/signup'>
              <button className='bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-xl'>
                SignUp
              </button>
            </Link>
        </div>
        <button 
        className='md:hidden flex items-center space-x-2 text-purple-700'
        onClick={toggleMenu}
        aria-label='Toggle Navigation'
        >
          <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${open ? 'block' : 'hidden'} mt-4`}>
        <div className='space-y-4'>
          <Link href='/about' className='block hover:text-purple-600'>About</Link>
          <Link href='/blog' className='block hover:text-purple-600'>Blog</Link>
          <Link href='/contact' className='block hover:text-purple-600'>Contact</Link>
          <Link href='/testimonials' className='block hover:text-purple-600'>Testimonials</Link>
          <Link href='/login' className='block hover:text-purple-600'>Login</Link>
          <Link href='/signup' className='block hover:text-purple-600'>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-xl'>
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
