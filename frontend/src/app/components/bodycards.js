import React from 'react'
import Image from "next/image";

export default function bodycards() {
  return (
    <div className="flex flex-row items-center justify-center">
    <div className="card">
      <img src={"/ImageTwo/Image2.png"} alt="" /> <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
      </p>
      <br />
      <button className="rounded-lg flex p-2 font-semibold bg-yellow-300 text-black text-lg hover:bg-black hover:text-white">Learn More</button>
    </div>
    <div className="card">
      <img src={"/ImageFour/Image4.png"} alt="Logo" /> <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
      </p>
      <br />
      <button className="rounded-lg flex p-2 font-semibold bg-yellow-300 text-black text-lg hover:bg-black hover:text-white">Learn More</button>
    </div>
    <div className="card">
      <img src={"/ImageThree/Image3.png"} alt="Logo" /> <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
      </p>
      <br />
      <button className="rounded-lg flex p-2 font-semibold bg-yellow-300 text-black text-lg hover:bg-black hover:text-white">Learn More</button>
    </div>
  </div>
  )
}
