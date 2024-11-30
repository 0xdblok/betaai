import React from "react";
import Image from "next/image";
import hero from "./asset/hero.jpeg";

export default function Footer() {
  return (
    <div>
      <h1 className="text-center text-4xl pt-16">Tokenomics</h1>
      <div className="flex gap-16 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image src={hero} alt="coin" width={30} height={30} />
          <h1 className="text-center text-xl">Supply</h1>
          <p className="text-center text-sm">1B</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={hero} alt="coin" width={30} height={30} />
          <h1 className="text-center text-sm ">LP Burned</h1>
          <p className="text-center text-sm">100%</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={hero} alt="coin" width={30} height={30} />
          <h1 className="text-center text-xl">Tax</h1>
          <p className="text-center text-sm">0%</p>
        </div>
      </div>
    </div>
  );
}
