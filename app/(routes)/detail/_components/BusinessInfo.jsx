import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function BusinessInfo({ business }) {
  return (
    business.name && (
      <div className="md:flex gap-4">
        <Image
          src={business?.images[0]?.url}
          alt={business.name}
          width={150}
          height={200}
          className="rounded-full h-[150px] shadow-md"
        />

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-baseline mt-4 md:mt-0">
            <h2 className="text-base text-primary bg-purple-200 rounded-full px-2">
              {business?.category?.name}
            </h2>
            <h2 className="text-[40px] font-bold">{business?.name}</h2>
            <h2 className="flex gap-2 text-gray-500 mb-2">
              <MapPin />
              {business?.address}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Mail />
              {business?.email}
            </h2>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <Button><Share/></Button>
            <h2 className="flex gap-2 text-lg text-primary"><User/> {business?.contactPerson}</h2>
            <h2 className="flex gap-2 text-lg text-gray-500"><Clock/> Avaliable 8:00AM to 4:00PM</h2>
          </div>
        </div>
      </div>
    )
  );
}

export default BusinessInfo;
