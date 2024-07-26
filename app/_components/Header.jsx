"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

function Header() {
  //DESCOPE AUTH
  // let { data } = useSession();

  // useEffect(() => {
  //   console.log(data?.user?.image);
  // }, [data]);

  let { user, error, isLoading } = useUser();

  console.log(user);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href={"/"}>
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

      {/* FOR DESCOPE AUTH */}
      {/* <div>
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
      </div> */}

      {/* <div className="flex gap-4">
        {!user && !isLoading && (
          <>
            <Link href={'api/auth/login'}>
              <Button>Log In</Button>
            </Link>
          </>
        )}
        {user && !isLoading && (
          <>
          <Image src={user.picture} alt={user.name} width={50} height={50} />
          <Button>{user.nickname}</Button>
            <Link href={'api/auth/logout'}>
              <Button>Log Out</Button>
            </Link>
            
          </>
        )}
      </div> */}

      <div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>{user.name}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/mybooking"}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer focus:text-white focus:bg-red-500"
              >
                <Link href={'api/auth/logout'}>
                  LogOut
                </Link>
                
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={'api/auth/login'}>
            <Button>Login / Singup</Button>
          </Link>
          
        )}
      </div>
    </div>
  );
}

export default Header;
