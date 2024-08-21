import React from 'react'
import Image from 'next/image';
import { FaHeadset } from "react-icons/fa";

function page() {
  return (
    <div className='min-h-screen py-20'>
      <div className='flex flex-col md:flex-row px-7'>
        <div className='lg:w-1/2 mb-8 md:mb-0'>
            <h3 className='text-md font-semibold mb-2'>About Bericks </h3>
            <div className='space-y-2 items-center justify-center'>
                <h3 className='font-bold'>We are a modern provider of Custom fashion and designs.</h3>
                <p>We combine passion for fashion with technical expertise to deliver innovative and unique designs. Our team of experienced fashion designers and consultants is dedicated to creating bespoke fashion experiences tailored to your style.</p>
                <p>Whether you are looking for apparel design, shoe design, textile patterns, or any other design we strive to exceed your expectations with creativity and craftsmanship.</p>
                <p>With a focus on elegence and sophistication, we bring your fashion ideas to life, ensuring each piece reflects your personal style and enhances your wardrobe.</p>
            </div>
            <div className='py-7'>
            <button
            className='bg-purple-700 text-white px-4 py-2 rounded-3xl hover:bg-purple-900'
            >
                Learn More
            </button>
            </div>
        </div>
        <div className='lg:w-1/2'>
            <Image
            src='/about.png'
            alt='image'
            width={650}
            height={200}
            />
        </div>
      </div>
      <div className='flex flex-col md:flex-row py-6 px-7'>
        <div className='md:w-1/2'>
            <Image
            src='/vision.png' alt='vision' height={200} width={650}
            />
        </div>
        <div className='md:w-1/2'>
            <h2 className='font-bold'>OUR VISION</h2>
            <p>We aim to become the leading fashion company in Kenya.</p>
            <p>We aim to become the leading fashion company in Kenya.</p>
            <p>We aim to become the leading fashion company in Kenya.</p>
        </div>
      </div>
      <div className='px-7'>
        <div className='text-center py-3 space-y-3'>
            <h3 className='text-purple-700 text-lg'>Our values</h3>
            <p className='text-3xl font-bold'>We follow these.</p>
            <p>At Bericks we aim higher and strive to make our clints happy.</p>
        </div>
        <div className='flex space-x-5 justify-center'>
            <div className='items-center'>
                <div className='flex space-x-3'>
                <FaHeadset className='text-4xl text-blue-600'/>
                <h3 className='font-bold'>24/7 Support</h3>
                </div>
                <p>We focus on supporting our clients everytime</p>
            </div>
            <div className='items-center'>
                <h3 className='font-bold'>Strong Teams</h3>
                <p>We are after havingdfghjklcafds cavjhbkdn,sm.</p>
            </div>
            <div className='items-center'>
            
                <h3 className='font-bold'>Customer Satisfaction</h3>
                <p>We focus on supporting our clients everytime</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
