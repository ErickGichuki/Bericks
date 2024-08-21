import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='py-20 px-10'>
      <div className='px-20 flex flex-col md:flex-row'>
        <div className='md:w-1/2 pt-10'>
          <h2 className='font-bold mb-4'>Sign up for Bericks</h2>
          <form className='space-y-7'>
            <input
            type='text'
            placeholder='Username'
            className='w-80 py-2 border rounded px-3'
            />
            <input
            type='text'
            placeholder='Email'
            className='w-80 py-2 border rounded px-3'
            />
            <input
            type='password'
            placeholder='Password'
            className='w-80 py-2 border rounded px-3'
            />
            <input
            type='password'
            placeholder='Confirm Password'
            className='w-80 py-2 border rounded px-3'
            />              
            <button type='submit' className='py-3 bg-purple-600 text-white w-80 rounded-md hover:bg-purple-800 flex items-center justify-center'>
              <Image 
              src='/login.png' 
              alt='login' 
              width={30} 
              height={20}
              className='mr-2 bg-white'
              />
               Sign Up
              </button>
          </form>
          <div className='py-8'>
            <h3 className='text-center'>Or signup with</h3>
            <p className=''></p>
          </div>
        </div>
        <div className='md:w-3/4 px-1 bg-blue-50'>
        <h2 className='font-bold'>Welcome to Bericks</h2>
          <Image
          src=''
          alt='Contact'
          width={400}
          height={100}
          className=''
          />
        </div>
      </div>
    </div>
  )
}

export default page
