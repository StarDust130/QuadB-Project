"use client";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { Toaster } from "@/components/ui/sonner";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { toast } from "sonner";
// import { DatePicker } from "./DatePicker";

import { useState } from "react";

const BookButton = ({
  name,
  rating,
  language,
  averageRuntime,
  genres,
  img,
}: any) => {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [username, setUserName] = useState<string>("");
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <Button>Book Ticket</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Book Movie Ticket</DrawerTitle>
            <DrawerDescription>
              <div className="md:max-w-screen-sm mx-auto flex border-2 border-gray-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform md:hover:scale-105">
                <div className="flex-shrink-0 w-1/2">
                  <Image
                    className="w-full h-full object-cover object-center"
                    src={img}
                    alt={name}
                    width={600}
                    height={600}
                    loading="lazy"
                  />
                </div>

                <div className="flex-grow p-4">
                  <h2 className="font-bold text-3xl mb-4">{name}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1 flex">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <span key={index}>
                            {index < rating ? <FaStar /> : <FaRegStar />}
                          </span>
                        ))}
                      </span>
                      <span className="text-gray-600">{rating}/10</span>
                    </div>
                    <div className="ml-4 flex items-center">
                      <MdLanguage className="text-gray-600" />
                      <span className="ml-1 text-gray-600">{language}</span>
                      <AiFillHeart className="text-red-600 ml-2" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <FiClock className="text-gray-600" />
                      <span className="ml-1 text-gray-600">
                        {averageRuntime} mins
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4">
                    {genres.map((genre: string) => (
                      <span
                        key={genre}
                        className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="mb-4">
                      <label className="text-gray-600 text-sm block">
                        Name
                      </label>
                      <input
                        placeholder="Enter your name"
                        type="text"
                        value={username}
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-gray-100 border text-black  rounded-md p-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-gray-600 text-sm block">
                        Date
                      </label>
                      <DatePicker
                        selected={date ? new Date(date) : null}
                        onChange={(date: Date | null) =>
                          setDate(date?.toString())
                        }
                        dateFormat="dd-MM-yyyy"
                        className="w-full bg-gray-100 border text-black rounded-md p-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
                        placeholderText="Select Date"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-gray-600 text-sm block">
                        Time
                      </label>
                      <input
                        type="time"
                        value={time}
                        required
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-gray-100 border text-black   rounded-md p-2 text-sm focus:outline-none focus:ring focus:border-blue-300"
                      />
                      <p className="text-gray-500 text-xs mt-1">
                        Enter time manually if needed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Toaster />

            <DrawerClose>
              <Button
                className="mr-2"
                onClick={() => {
                  if (name && date && time) {
                    toast("Ticket Booked", {
                      description: `${username}. ${name} Ticket Booked Successfully on ${date} at ${time}`,
                    });
                    setUserName("");
                    setDate("");
                    setTime("");
                  } else {
                    // Handle the case where not all required fields are filled
                    toast.error("Please fill in all required fields");
                  }
                }}
              >
                Book Now
              </Button>

              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default BookButton;
