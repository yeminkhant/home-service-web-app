"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./_components/BookingHistoryList";
import { useSession } from "next-auth/react";
import GlobalApi from "@/app/_services/GlobalApi";

function MyBooking() {

  let [bookingHistory,setBookingHistory] = useState([]);

  let {data} = useSession();

  useEffect(()=>{
    data&&getUserBookingHistory()
  },[data])

  // Used To Get User Booking History
  const getUserBookingHistory = () => {
    GlobalApi.getUserBookingHistory(data.user.email).then(res => {
      setBookingHistory(res.bookings);
      console.log(res.bookings);
    })
  }

  const filterData = (type) => {
    const result = bookingHistory.filter(item => type=='booked'? new Date(item.date)>new Date(): new Date(item.date)<new Date());

    return result;
  }

  return (
    <div className="my-5 mx-5 md:mx-10">
        <h2 className="font=extrabold text-[20px] mb-4">My Bookings</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={filterData('booked')}/>
        </TabsContent>
        <TabsContent value="completed">
        <BookingHistoryList bookingHistory={filterData('completed')}/>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;