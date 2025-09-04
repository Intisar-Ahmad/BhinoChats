"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,

} from "@clerk/nextjs";
import { usePathname } from "next/navigation";



const navigationArray = [
  {
    name:"Home",
    href:"/home"
  },
  {
    name:"About",
    href:"/about"
  },
  
  {
    name:"Forums",
    href:"/forums"
  },

]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
 
  if(path.split("/").length === 3 && path.split("/")[2] !== "") return null;
  return (
    <nav className={`bg-white shadow-lg ${isOpen?"rounded-lg":"rounded-full"} shadow-blue-500/40 border border-blue-500/40  fixed top-10 w-[80vw] left-[10vw] z-50 md:py-4 text-gray-900`}>
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={"text-3xl sm:text-4xl font-bold text-blue-700 tracking-tight"}
          >
            BhinoChats
          </Link>

          <div className="hidden md:flex space-x-6 items-center text-lg">
           {navigationArray.length !== 0 && navigationArray.map((page,index)=>{
            return  <Link
              key={index + Math.random()}
              href={page.href}
              className={`font-medium hover:text-blue-600 transition ${path === page.href?' text-blue-600 text-xl ':''}`}
            >
              {page.name}
            </Link>
           })}
          
    
            <SignedOut>
              <SignInButton>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>
            <div className="absolute h-full right-4 flex items-center">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X className="w-6 h-6 text-blue-700" />
              ) : (
                <Menu className="w-6 h-6 text-blue-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md rounded-lg">
          <Link href="/" className="block font-medium hover:text-blue-600">
            Home
          </Link>
          <Link href="/forums" className="block font-medium hover:text-blue-600">
         Forums
          </Link>
          <Link
            href="/about"
            className="block font-medium hover:text-blue-600"
          >
            About
          </Link>
          <SignedOut>
            <SignInButton>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="w-full bg-gray-100 text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton  />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
