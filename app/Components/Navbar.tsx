"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/assets/logo.svg";
import Image from "next/image";
import { Search } from "@mui/icons-material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`top-0 z-10 sticky flex items-center justify-between py-3 px-10 ${
        isScrolled &&
        "bg-gradient-to-b via-[#141123] from-[#141123] via-[#141123]"
      }`}
    >
      <Link href="/">
        <Image src={Logo} alt="logo" width={110}/>
      </Link>
      <div className="flex gap-8 max-md:hidden text-white">
        <Link
          href="/"
          className="text-[16px] text-purple-2 transition-all duration-500 cursor-pointer hover:text-[#fff]"
        >
          HOME
        </Link>
        <Link
          href="/"
          className="text-[16px] text-purple-2 transition-all duration-500 cursor-pointer hover:text-[#fff]"
        >
          MOVIES
        </Link>
        <Link
          href="/"
          className="text-[16px] text-purple-2 transition-all duration-500 cursor-pointer hover:text-[#fff]"
        >
          GATEGORY
        </Link>
        <Link
          href="/"
          className="text-[16px] text-purple-2 transition-all duration-500 cursor-pointer hover:text-[#fff]"
        >
          MY LIST
        </Link>
      </div>
      <div className="flex gap-3 items-center ">
      <div className="flex gap-8 items-center  rounded-full">
        <div className="flex justify-between items-center bg-purple-1 gap-2 px-4 py-1 rounded-xl">
          <input
            type="text"
            placeholder="Search movie..."
            className="w-[120px] bg-purple-1  outline-none p-x-20 text-purple-2 text-[15px] border-1 rounded-full p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled={search === ""}>
          <Search
              className=" cursor-pointer text-purple-2 hover:text-[#fff] transition-all duration-500 "
              onClick={() => router.push(`/search/${search}`)}
            />
          </button>


          {dropdownMenu && (
            <div className="absolute top-20 p-3 flex text-purple-2 flex-col gap-3 right-5 z-20 w-32 bg-[#fff] rounded-xl">
              <Link className="hover:text-purple-1 transition-all duration-500" href="/">Home</Link>
              <Link className="hover:text-purple-1 transition-all duration-500" href="/">MOVIES</Link>
              <Link className="hover:text-purple-1 transition-all duration-500" href="/">CATEGORY</Link>
              <Link className="hover:text-purple-1 transition-all duration-500" href="/">My List</Link>
              <a className="text-purple-2 hover:text-purple-1 transition-all duration-500 ">Log Out</a>
            </div>
          )}
        </div>
      </div>
      <div>
      <img
            src="/assets/profile_icon.jpg"
            alt="profile img"
            className="w-8 h-auto cursor-pointer rounded-lg"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
