import Image from "next/image";
import React from "react";
import { FaPlus, FaRegUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

function Banner() {
  return (
    <div className="flex mt-20">
      {/* left */}
      <div className="flex flex-col w-[50%] gap-10">
        <div className="text-6xl font-bold">
          Slack is where the future works
        </div>
        <div className="text-xl font-medium">
          Transform the way you work with one place for <br /> everyone and
          everything you need to get stuff done.
        </div>
        <div className="*:rounded-[4px] *:font-semibold flex gap-2">
          <span className="bg-primary py-4 px-11">TRY FOR FREE</span>
          <span className="bg-blue-500 text-white flex items-center gap-2 pl-2 pr-6">
            <span className="bg-white p-3 rounded-sm">
              <Image src={"/google.png"} alt="google" width={20} height={20} />
            </span>
            SIGN UP WITH GOOGLE
          </span>
        </div>
      </div>
      {/* right */}
      <div className="relative flex flex-col w-[50%] h-[350px] shadow-md">
        <div className="overflow-hidden rounded-xl h-full">
          <div className="bg-[#4a044e] p-4 flex gap-2">
            <div className="bg-red-500 rounded-full h-3 w-3"></div>
            <div className="bg-yellow-300 rounded-full h-3 w-3"></div>
            <div className="bg-green-500 rounded-full h-3 w-3"></div>
          </div>
          <div className="h-full flex">
            {/* left */}
            <div className="bg-primary w-[50%] h-full">
              <div className="flex flex-col gap-3 pt-8 font-semibold">
                <div className="flex items-center justify-between px-5">
                  <div className="flex items-center gap-2">
                    <TiArrowSortedDown />
                    Channels
                  </div>
                  <FaPlus />
                </div>
                <div className="bg-[#0064a0] px-5 py-1">
                  <div className="ml-3"># project-unicorn</div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="bg-white w-full p-7 flex flex-col gap-5">
              <div className="text-2xl font-bold"># project-unicorn</div>
              <div className="flex gap-3">
                <div className="border border-black flex items-center justify-center px-3 rounded-md">
                  <FaRegUser />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold">Zoe Maxwell</span>
                  <span className="text-base">Are we ready for launch?</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="border border-black flex items-center justify-center px-3 rounded-md">
                  <FaRegUser />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold">Matt Brewer</span>
                  <span className="text-base">Here's the run of show</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* outer icons */}
        <div className="absolute rounded-full text-3xl font-bold bg-white flex -top-6 left-[140px] px-4 py-1 shadow-md">
          👍 3
        </div>
        <div className="absolute rounded-full text-3xl font-bold bg-white flex top-[200px] -left-5 px-4 py-1 shadow-md">
          🎉5
        </div>
        <div className="absolute rounded-full text-3xl font-bold bg-white flex top-[160px] -right-10 px-4 py-1 shadow-md">
          💡8
        </div>
        <div className="absolute rounded-full text-3xl font-bold bg-white flex top-[270px] right-14 px-4 py-1 shadow-md">
          👀5
        </div>
      </div>
    </div>
  );
}

export default Banner;
