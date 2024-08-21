import React from 'react'
import { FaFacebook,  FaXTwitter, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-6 px-5'>
        <div className='space-y-2'>
          <h2 className='font-bold text-lg'>Berick Designs</h2>
          <p>123 Road, ABC Building, Milimani Kisumu</p>
          <div className='flex space-x-4'>
            <FaFacebook className=''/>
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='font-bold text-lg'>QUICK LINKS</h2>
          <div className='flex flex-col space-y-1'>
            <a href='/blog' className=''>Blog</a>
            <a href='/contact' className=''>Support</a>
            <a href='/about' className=''>About Us</a>
            <a href='#' className=''>FAQs</a>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='font-bold text-lg'>LEGAL</h2>
          <div className='flex flex-col space-y-1'>
            <a href='#' className=''>GDPR</a>
            <a href='/contact' className=''>Privacy Policy</a>
            <a href='/about' className=''>Terms of Service</a>
            <a href='#' className=''>Disclaimer</a>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='font-bold text-lg'>CONTACT</h2>
          <div className='flex flex-col space-y-1'>
            <p>+254 798 549508</p>
            <a href='mailto:mtebi@gmail.com'>Email</a>
            <a href='#' className=''>Linkedin</a>
            <a href='#' className=''>Instagram</a>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='font-bold'>NEWSLETTER</h2>
          <p className='text-md'>Subscribe now to get the latest posts.</p>
          <div className='flex'>
            <input type='text' placeholder='Email Address' className='w-1/2 py-1 px-4 border-t border-b border-l rounded-l-md border-purple-600'/>
            <button type='submit' className='bg-purple-600 text-white py-2 rounded-r-md px-4'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
