import Image from 'next/image'
import React from 'react'

function BusinessDescription({business}) {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-3'>Description</h2>
      <p className='text-lg indent-10 text-gray-500 mb-5'>{business?.about}</p>
      <h2 className='text-xl font-bold mb-4'>Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {business?.images?.map((img,index) => (
          <Image key={index} src={img?.url} alt='detailImg' width={700} height={200} className='rounded-lg' />
        ))}
      </div>
    </div>
  )
}

export default BusinessDescription