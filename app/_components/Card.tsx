import Image from "next/image";
import Link from "next/link";
import { IoLanguageSharp } from "react-icons/io5";
import { BiSolidTimer } from "react-icons/bi";
const Card = ({
  title,
  imageSrc,
  summary,
  onClick,
  score,
  id,
  rating,
  language,
  averageRuntime,
}: any) => {
  return (
    <div className="lg:border-2 md:border-0 border-2  border-gray-500 rounded-bl-3xl rounded-tr-3xl  shadow-md hover:shadow-lg p-4">
      <div onClick={onClick} className="block rounded-lg p-4 cursor-pointer">
        <Image
          alt="Signage"
          width={500}
          height={500}
          src={imageSrc ? imageSrc : "/no-img.jpeg"}
          className="w-full h-56 sm:h-64 lg:h-72 object-fill rounded-bl-3xl rounded-tr-3xl"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">{score}</dd>
            </div>

            <div>
              <dt className="sr-only"></dt>

              <dd className="font-medium">{title}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <BiSolidTimer className="h-4 w-4 text-blue-700" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Runtime</p>

                <p className="font-medium">
                  {averageRuntime ? averageRuntime + " min" : "Not Found"}
                </p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="h-4 w-4 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Rating</p>

                <p className="font-medium">
                  {rating ? rating + "/10" : "Not Found"}
                </p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <IoLanguageSharp className="h-4 w-4 text-blue-700" />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Language</p>

                <p className="font-medium">{language}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
