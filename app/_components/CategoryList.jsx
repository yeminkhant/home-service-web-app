import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryList({categoryList}) {

  return (
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mx-10 md:mx-22 lg:mx-10 mt-10 gap-6 lg:gap-x-25'>
      {categoryList.length > 0 ? categoryList.map((category,index) => (
        <Link href={'/search/'+category.name} key={index} className={`w-25 flex justify-center items-center flex-col bg-purple-100 p-2 rounded-lg shadow-md hover:scale-110 transition-all ease-in-out`}>
          <Image src={category.icon.url} className='mt-3' alt='icon' width={25} height={25} />
          <h2 className='text-sm mt-3'>{category.name}</h2>
        </Link>
      )) : 
      [1,2,3,4,5,6].map((item,index) => (
        <div key={index} className='w-full h-[100px] bg-slate-200 rounded-lg animate-pulse'>

        </div>
      ))
      }
    </div>
  )
}

export default CategoryList