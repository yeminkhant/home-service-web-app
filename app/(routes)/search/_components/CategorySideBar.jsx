"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function CategorySideBar() {

    let [categoryList,setCategoryList] = useState([]);
    let [selectedCategory,setSelectedCategory] = useState([]);

    const params = useParams();

    useEffect(()=>{
        // console.log(params);
        getCategoryList();
    },[])

    useEffect(()=>{
        params && setSelectedCategory(params.category);
    },[params])

    const getCategoryList = () => {
        GlobalApi.getCategory().then((resp) => {
            // console.log(resp);
            setCategoryList(resp.categories);
        })
    }

  return (
    <div>
        <h2 className='font-bold text-lg text-primary mb-4'>Categories</h2>

        <div>
            {categoryList.map((category,index) => (
                <Link href={'/search/'+category.name} key={index} className={`flex items-center gap-3 p-4 md:mr-10 mr-2 cursor-pointer border rounded-lg hover:text-primary hover:bg-purple-200 hover:border-primary shadow hover:shadow-lg transition-all ease-in-out mb-3 ${selectedCategory == category.name && 'text-primary bg-purple-200 border-primary shadow-lg'}`}>
                    <Image src={category.icon.url} alt={category.name} width={30} height={30} />
                    <h2 className='text-sm'>{category.name}</h2>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategorySideBar