import React from "react";
import Image from "next/image";

export default function Tokenomics() {
  return (
    <div className=" pt-16">
      <div className="flex justify-center items-center">
        {" "}
        <a href="" className=" px-32 py-5 rounded-xl border-2">
          Buy Here
        </a>{" "}
      </div>

      <div className="flex justify-center items-center pt-4">
        <div>
          <a>
            <Image src="" alt="hero" width={50} height={50} />
          </a>
        </div>{" "}
        <div>
          <a>
            <Image src="" alt="hero" width={50} height={50} />
          </a>
        </div>
        <div>
          <a>
            <Image src="" alt="hero" width={50} height={50} />
          </a>
        </div>
        <div>
          <a>
            <Image src="" alt="hero" width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
