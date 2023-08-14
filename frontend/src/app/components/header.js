import React from "react";
import Image from "next/image";

export default function header() {
  return (
    <div className="flex flex-row my-8 items-center justify-center ">
      <div className="imagestyles">
        <img src={"/acme.png"} alt="Logo"/>
      </div>
      <div className="flex flex-row">
        <div className="buttons">
        <button className="rounded-lg flex p-2 font-semibold mx-6 bg-white text-black text-lg hover:bg-black  hover:text-white">Our Gurantee</button>
        <button className="rounded-lg flex p-2 font-semibold mx-6 bg-white text-black text-lg hover:bg-black  hover:text-white">Tesimonials</button>
        <button className="rounded-lg flex p-2 font-semibold mx-6 bg-white text-black text-lg hover:bg-black  hover:text-white">News</button>
        <button className="rounded-lg flex p-2 font-semibold mx-6 bg-white text-black text-lg hover:bg-black  hover:text-white">Work Here</button>
        <button className="rounded-lg flex p-2 font-semibold mx-6 bg-white text-black text-lg hover:bg-black  hover:text-white">About Us</button>
        <button className="rounded-lg flex p-2 font-semibold mx-6 bg-yellow-300 text-black text-lg hover:bg-black hover:text-white">Buy Anvils</button>
        </div>
    </div>
    </div>
  );
}
