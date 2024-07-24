import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookingSection from "./BookingSection";

function SuggestedBusinessList({ business }) {
  let [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    // console.log(params.category);
    business && getBusinessList();
  }, [business]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name).then((resp) => {
      // console.log(resp.businessLists);
      setBusinessList(resp.businessLists);
    });
  };

  return (
    <div>
      <BookingSection business={business}>
        <Button className="flex gap-2">
          <NotebookPen /> Book Appointment
        </Button>
      </BookingSection>

      <div className="hidden md:block">
        <h2 className="text-lg font-bold mt-2 mb-2">Similar Business</h2>
        {businessList &&
          businessList.map((business, index) => (
            <Link key={index} href={"/detail/" + business.id}>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-2 mb-4 hover:border border-purple-300 rounded-lg hover:shadow-md p-4 transition-all ease-in-out">
                <div>
                  <Image
                    src={business?.images[0]?.url}
                    alt={business?.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-fill h-[150px]"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold">{business.name}</h2>
                  <h2 className="text-primary">{business.contactPerson}</h2>
                  <h2 className="text-gray-500">{business.address}</h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
