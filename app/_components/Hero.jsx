import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h2 className="font-bold text-[30px] text-center">
        Find Home <br className="md:hidden"></br> <span className="text-primary">Service/Repair</span> <br></br> Near You
      </h2>
      <h2 className="text-sm text-gray-400">
        Expore Best Home Service & Repair Near You
      </h2>

      {/* Search Bar */}
      <div className="flex items-center mt-4 gap-x-2">
        <Input className="border-purple-500 rounded-full md:w-[280px]" placeholder="Search"/>
        <Button className="rounded-full">
            <Search className="w-4 h-4"/>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
