import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function BusinessList({ businessList, title }) {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-[20px] mb-6">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {businessList.length > 0 ? businessList.map((business, index) => (
          <Link href={'/detail/'+business.id} key={index} className="shadow-md rounded-lg hover:shadow-primary hover:scale-110 transition-all ease-in-out relative">
            <div className="overflow-hidden">
              <Image
                src={business.images[0].url}
                alt={business.name}
                width={500}
                height={200}
                className="w-[500px] h-[200px] object-fit rounded-t-lg hover:scale-125 transition-all ease-in-out"
              />
            </div>

            <div className="flex flex-col items-baseline p-4 gap-y-2">
              <h2 className="text-xs md:text-sm text-primary bg-purple-200 px-2 py-1 rounded-full">
                {business.category.name}
              </h2>
              <h2 className="font-bold text-lg">{business.name}</h2>
              <h2 className="text-primary">{business.contactPerson}</h2>
              <h2 className="text-sm text-gray-400">{business.address}</h2>
              <div className="mt-12"></div>
            </div>
            <Button className="absolute bottom-5 left-5">Book Now</Button>
          </Link>
        )) : 
        [1,2,3,4,5,6,7].map((item,index) => (
          <div key={index} className="w-full h-[400px] bg-slate-200 rounded-lg animate-pulse"></div>
        ))
        }
      </div>
    </div>
  );
}

export default BusinessList;
