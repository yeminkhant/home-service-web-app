"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

function BussinessByCategory({params}) {

  let [businessList,setBusinessList] = useState([]);

  useEffect(()=>{
    // console.log(params.category);
    params && getBusinessList();
  },[params])

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category).then(resp => {
      setBusinessList(resp.businessLists);
    })
  }
  
  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  )
}

export default BussinessByCategory