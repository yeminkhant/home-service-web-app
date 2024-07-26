"use client";
import GlobalApi from "@/app/_services/GlobalApi";
// import { signIn, useSession } from "next-auth/react";
import React, { use, useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";
import { useUser } from "@auth0/nextjs-auth0/client";

function BusinessDetail({ params }) {
  // let { data, status } = useSession();

  let {user, error,isLoading} = useUser();

  let [business, setBusiness] = useState([]);

  useEffect(() => {
    params && getBusinessById();
  }, [params]);

  // useEffect(() => {
  //   checkUserAuth();
  // }, []);

  const getBusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then((resp) => {
      setBusiness(resp.businessList);
    });
  };

  // const checkUserAuth = () => {
  //   if (status == "loading") {
  //     return <p>Loading...</p>;
  //   }

  //   if (status == "unauthenticated") {
  //     signIn("descope");
  //   }
  // };

  return (
    // status == "authenticated"
    user && (
      <div className="py-6 md:py-18 px-6 md:px-15">
        <BusinessInfo business={business} />

        <div className="grid grid-cols-4 gap-2 mt-10">
          <div className="col-span-4 md:col-span-3 order-last md:order-first">
            <BusinessDescription business={business}/>
          </div>

          <div className="">
            <SuggestedBusinessList business={business}/>
          </div>
        </div>

      </div>
    )
  );
}

export default BusinessDetail;
