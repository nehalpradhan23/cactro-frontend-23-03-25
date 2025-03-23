import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const navMenuItems = ["Product", "Enterprise", "Resources", "Pricing"];

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center py-4">
        <div className="flex items-center gap-8">
          <div className="flex gap-2 items-center">
            <Image src={"/slack.png"} alt="slack" width={30} height={30} />
            <span className="text-3xl font-bold tracking-tighter">slack</span>
          </div>
          <ul className="flex items-center gap-5 font-semibold text-lg">
            {navMenuItems?.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item}

                {index === 0 && <IoIosArrowDown />}
              </li>
            ))}
          </ul>
        </div>
        {/* right ------------- */}
        <div className="flex items-center gap-10">
          <FaSearch className="text-lg" />
          <span className="text-lg font-semibold">Sign in</span>
          <div className="flex gap-5">
            <span className="border border-primary text-primary px-4 py-2 font-medium rounded-md">
              TALK TO SALES
            </span>
            <span className="bg-primary px-4 py-2 font-medium rounded-md">
              TRY FOR FREE
            </span>
          </div>
        </div>
      </nav>
      <div className="bg-[#0064a0] text-lg text-white py-6 -mx-8 px-8 rounded-full flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span>Slack is your digital HQ.</span>
          Meet the new features keeping teams connected in a work-from-anywhere
          world.
          <span className="flex items-center gap-2 font-semibold underline ml-2">
            Let's go
          </span>
          <FaArrowRightLong className="mt-1 ml-1" />
        </div>
        <IoMdClose className="text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
