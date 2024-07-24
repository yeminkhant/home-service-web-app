import { Calendar, Clock, MapPin, Timer, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function BookingHistoryList({ bookingHistory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {bookingHistory.map((booking, index) => (
        <div key={index} className="flex space-x-5 rounded-lg shadow-md p-4 mb-4">
          <Image
            src={booking.businessList.images[0].url}
            alt={booking.businessList.name}
            width={120}
            height={120}
            className="object-cover rounded-lg"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{booking.businessList.name}</h2>
            <h2 className="flex gap-2 text-primary">
              <User className="text-primary" />
              {booking.businessList.contactPerson}
            </h2>
              <h2 className="flex gap-2 text-gray-500">
                <MapPin className="text-primary" />
                  {booking.businessList.address}
              </h2>
              <h2 className="flex gap-2">
                <Calendar className="text-primary"/>Service On: <span className="font-bold"> {booking.date}</span>
              </h2>
              <h2 className="flex gap-2">
                <Clock className="text-primary"/>Service On: <span className="font-bold">{booking.time}</span>
              </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingHistoryList;
