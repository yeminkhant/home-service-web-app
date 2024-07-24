import React from 'react'
import CategorySideBar from './_components/CategorySideBar'

function layout({children}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
        {/* Category Nav Side Bar */}
        <div className='hidden md:block'>
            <CategorySideBar/>
        </div>
        <div className='md:col-span-3'>{children}</div>
    </div>
    
  )
}

export default layout