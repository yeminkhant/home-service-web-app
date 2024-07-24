"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  let { data } = useSession();

  // useEffect(() => {
  //   console.log(data?.user?.image);
  // }, [data]);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Link href={'/'}>
          <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
        </Link>
        

        <div className="hidden md:flex items-center gap-6">
          <Link href={'/'}>
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition-all">
            Home
          </h2>
          </Link>
          
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition-all">
            Service
          </h2>
          <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition-all">
            About Us
          </h2>
        </div>
      </div>

      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={data?.user?.image}
                alt="userLogo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/mybooking'}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={()=>signOut()} className="cursor-pointer focus:text-white focus:bg-red-500">LogOut</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Login / Singup</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
