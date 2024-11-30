import React from "react";
import Image from "next/image";
import hero from "./asset/hero.jpeg";

export default function Hero() {
  return (
    <div>
      <h1 className="text-4xl font-mono text-center pt-4">$POBBY</h1>
      <div className=" flex justify-center items-center">
        {" "}
        <Image
          className="border-2 rounded-md"
          src={hero}
          alt="hero"
          width={500}
          height={500}
        />
      </div>

      <div className="flex justify-center items-center px-28">
        <div className="flex flex-col items-center justify-center bg-slate-500 rounded-lg mx-6 my-4">
          <h1 className="text-2xl font-mono text-center pt-4">$POBBY</h1>
          <p className="text-center text-gray-400 text-sm mx-4">
            The memecoin that is the memecoin
          </p>
        </div>
      </div>
      <h2 className="text-center text-2xl">CA : TBA</h2>
    </div>
  );
}
