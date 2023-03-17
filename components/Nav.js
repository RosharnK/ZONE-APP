/** @format */

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-black  py-10 text-white shadow-lg  ">
      <Link href="/" className="text-white px-10 text-3xl italic">
        ZONE
      </Link>
      <ul className="hidden md:flex px-5 mr-12 mx-auto font-semibold font-heading space-x-12">
        <a href="#home" className="tracking-widest hover:text-white">
          HOME
        </a>
        <a href="#brands" className="tracking-widest hover:text-white">
          BRANDS
        </a>
        <a href="#products" className="tracking-widest hover:text-white">
          PRODUCTS
        </a>
        <a href="#contact us" className="tracking-widest hover:text-white">
          CONTACT US
        </a>
      </ul>

      {/*Mobile version*/}
      <div onClick={handleNav} className="block md:hidden pr-5 ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "lg:hidden fixed left-0 top-0 w-[50%] h-full bg-black ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }
      >
        <Link href="/" className="w-full text-3xl p-6 italic">
          ZONE
        </Link>
        <ul className="p-4">
          <a className="cursor-pointer" href="#home">
            <li className="p-4">HOME</li>
          </a>
          <a className="cursor-pointer" href="#brands">
            <li className="p-4">BRANDS</li>
          </a>
          <a className="cursor-pointer" href="#products">
            <li className="p-4">PRODUCTS</li>
          </a>
          <a className="cursor-pointer" href="#contact us">
            <li className="p-4">CONTACT US</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
