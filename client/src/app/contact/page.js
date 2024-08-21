import React from 'react'

function page() {
  return (
    <div className='pt-20'>
      <div className='flex flex-col md:flex-row py-2 px-2'>
        <div className='md:w-1/2'>
          <h2 className='text-xl font-bold text-center text-blue-700'>Contact us</h2>
          <p className='text-lg font-semibold'>Feel free to <span className='text-blue-700'>get in touch with us.</span></p>
          <p>We are here to assist you!</p>
          <div className='flex space-x-4'>
            <input type='text' placeholder='Email Address' className='border-b border-gray-700'/>
            <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-md'>Contact us</button>
          </div>
        </div>
        <div className='md:w-1/2'>
          <h2 className='font-bold'>d</h2>
        </div>
      </div>
    </div>
  )
}

export default page
