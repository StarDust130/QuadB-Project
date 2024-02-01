import { Button } from "@/components/ui/button";
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
import { Toaster } from "@/components/ui/sonner";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { toast } from "sonner";

const BookButton = ({
  name,
  rating,
  language,
  averageRuntime,
  genres,
  img,
}: any) => {
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
              <div className="max-w-md mx-auto border-2 border-gray-500  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                <Image
                  className="w-full h-56 object-cover"
                  src={img}
                  alt={name}
                  width={300}
                  height={300}
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{name}</h2>
                  <div className="flex items-center mb-2">
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
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center">
                      <FiClock className="text-gray-600" />
                      <span className="ml-1 text-gray-600">
                        {averageRuntime} mins
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    {genres.map((genre: string) => (
                      <span
                        key={genre}
                        className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            {/* <Button>Submit</Button>
             */}

            <Toaster />

            <DrawerClose>
              <Button
              className="mr-2"
                onClick={() =>
                  toast("Ticket Booked", {
                    description: `${name} Ticked Book Successfully`,
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
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
