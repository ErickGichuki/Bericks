import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='py-20 px-4 md:px-10 md:space-x-7'>
      <div className='text-center space-y-3 mb-10'>
        <h2 className='text-lg text-violet-600'>Blog</h2>
        <p className='text-3xl font-bold'>We love <span className='text-violet-600'>Writing</span></p>
      </div>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
        <div className='bg-blue-50 md:w-3/4'>
          <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <Image
            src='/blog.png'alt='beach' className='object-cover h-full w-full' width={500} height={100}/>
          </div>
          <div className='md:w-1/2 p-4'>
            <h2 className='text-xl font-bold'>Enjoying the beach life while on a vacation</h2>
            <p className='mt-2'>Experience the serenity of the beach while basking in the sun. Perfect for those who love a quiet and peaceful vacation.</p>
          </div>
          </div>
        </div>
        <div className='md:w-1/4 pl-4'>
          <Image src='/blog2.png' alt='writing journey' width={500} height={100} className='object-cover h-full w-full'/>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
        <div className='bg-blue-50'>
          <Image src='/exp1.png' alt='pic' width={400} height={200} className='object-cover h-full w-full'/>
          <div className='bg-blue-50 py-6 px-6'>
            <h2 className='text-md font-bold'>Best place to chill while around.</h2>
            <p className='text-sm'>Oiljd</p>
          </div>
        </div>
        <div className=''>
          <Image src='/exp2.png' alt='pic' width={400} height={100} className='object-cover h-full w-full'/>
          <div className='bg-blue-50 py-6 px-6'>
            <h2 className='text-md font-bold'>A place where the finest things are found</h2>
            <p className='text-sm'>Dunga</p>
          </div>
        </div>
        <div className=''>
          <Image src='/exp3.png' alt='pic' width={400} height={100} className='object-cover h-full w-full'/>
          <div className='bg-blue-50 py-6 px-6'>
            <h2 className='text-md font-bold'>Having great moments in the Park!</h2>
            <p className='text-sm'>Impala Park</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
