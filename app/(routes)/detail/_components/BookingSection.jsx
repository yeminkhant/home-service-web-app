import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";
import moment from "moment/moment";

function BookingSection({ children, business }) {
  let [date, setDate] = useState(new Date());
  let [timeSlot, setTimeSlot] = useState([]);
  let [selectedTime, setSelectedTime] = useState(null);
  let [bookedSlot,setBookedSlot] = useState([]);

  let { data } = useSession();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    GlobalApi.createNewBooking(
      business.id,moment(date).format('DD-MMM-yyyy'),selectedTime,data.user.email,data.user.name
    ).then(
      (resp) => {
        // console.log(resp);
        if (resp) {
          // Toast Msg
          setDate()
          setSelectedTime('')
          toast("Service Booked Successfully")
        }
      },
      (e) => {
        // Error Toast Msg
        toast("Error While creating Booking!!")
      }
    );
  };

  useEffect(()=>{
    date&&businessBookedSlot();
  },[date])


  // Get Slected Date Business Booked Slot
  const businessBookedSlot = () => {
    GlobalApi.businessBookedSlot(business.id,moment(date).format('DD-MMM-yyyy')).then((resp) => {
      setBookedSlot(resp.bookings);
      // console.log(resp.bookings[0].time)
    })
  }

  const isBookedSlot = (time) => {
    return bookedSlot.find(item=>item.time==time);
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book And Appointment</SheetTitle>
            <SheetDescription>
              Select Date and Time Slot to book an service
            </SheetDescription>
          </SheetHeader>

          {/* date picker */}
          <div className="flex flex-col">
            <h2 className="font-bold my-3">Select Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          {/* time slote picker */}
          <div>
            <h2 className="my-3 font-bold">Select Time Slot</h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlot?.map((item, index) => (
                <Button
                  key={index}
                  disabled={isBookedSlot(item.time)}
                  variant="outline"
                  className={`border rounded-lg px-2 py-2 hover:bg-primary hover:text-white transition-all ${
                    selectedTime == item.time && "bg-primary text-white"
                  }`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  {item.time}
                </Button>
              ))}
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <div className="mt-4 space-x-4">
                <Button variant="destructive">Cancel</Button>
                <Button
                  disabled={!(date && selectedTime)}
                  onClick={() => saveBooking()}
                >
                  Book
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
