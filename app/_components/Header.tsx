import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGithub } from "react-icons/fa6";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="mx-auto  flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8 border-b shadow-lg ">
          <Link className="block  " href="/">
            <Logo />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/project"
                  >
                    Project
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    About us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex gap-5 items-center justify-center">
              <Link
                href={"https://github.com/StarDust130/QuadB-Project"}
                target="_blank"
                className="hidden md:block"
              >
                <FaGithub className="h-6 w-6 text-black dark:text-white hover:text-gray-800" />
              </Link>

              <ModeToggle />
            </div>
            <span className="block  md:hidden mt-2 ml-2 ">
              <span className="sr-only">Toggle menu</span>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/">
                    <DropdownMenuLabel>Home</DropdownMenuLabel>
                  </Link>
                  <DropdownMenuSeparator />
                  <Link href="/project">
                    <DropdownMenuItem>Project</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
