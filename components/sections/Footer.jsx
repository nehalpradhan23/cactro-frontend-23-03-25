import Image from "next/image";
import React from "react";

const logos = [
  "/fox.png",
  "/lonelyPlanet.png",
  "/intuit.png",
  "/carvana.png",
  "/kiva.webp",
  "/target.png",
];

function Footer() {
  return (
    <div className="mt-[100px]">
      <div className="flex w-full justify-between items-center">
        {logos?.map((item, index) => (
          <div
            className="h-[100px] w-[150px] flex items-center justify-center object-fill"
            key={index}
          >
            <img src={item} className="h-fit" alt="" />
          </div>
        ))}
      </div>
      {/* ----------- */}
      <div className="flex gap-16 mt-[80px]">
        <Image src={"/footer-left.png"} alt="" width={500} height={200} />
        <div className="flex flex-col w-[500px] gap-5">
          <div className="text-3xl font-bold">
            Now is your moment to build a better tommorow
          </div>
          <div className="font-semibold">
            We've seen what the future can be. Now it's time to decide what it
            will be
          </div>
          <span className="border border-primary text-primary w-fit p-4">
            WATCH VIDEO
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
