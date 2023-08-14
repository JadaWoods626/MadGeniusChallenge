"use client"

import React from "react";

function showForm() {
  
}

export default function footer() {
  return (
    <div>
      <div className="flex flex-row bg-black p-8 w-full ">
        <div className="flex flex-col mx-4 mt-8 mb-4 text-yellow-300 text-xl w-1/5">
          <ul>
            <li>Our Gurantee</li>
            <li>Testimonials</li>
            <li>News</li>
            <li>Work Here</li>
            <li>About Us</li>
            <li>Buy Anvils</li>
          </ul>
        </div>
        <div className="flex flex-col mx-4 mt-8 mb-4 w-1/3">
          <h1 className="text-white text-xl">Latest News</h1>
          <div className="flex flex-row pt-4">
            <img
              src={"/ImageEight/Image8.png"}
              alt=""
              className="w-20 h-20 mr-2"
            />
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div className="flex flex-row mt-4 ">
            <img
              src={"/ImageNine/Image9.png"}
              alt=""
              className="w-20 h-20 mr-2"
            />
            <p className="text-white text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-4 mt-8 mb-4 w-1/3">
          <h1 className="text-white text-xl pb-4">Our Newsletter</h1>
          <form>
            <input type="text" name="firstname" placeholder="Your Name"></input>
            <input type="text" name="email" placeholder="Your Email"></input>
            <button className="rounded-lg flex p-2 mt-4 font-semibold bg-yellow-300 text-black text-lg hover:bg-black hover:text-white">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col mx-4 mt-8 mb-4 w-1/4">
          <img src={"/blackacme.png"} alt="logo" className="footerlogo pr-5" />
          <p className="text-white text-sm pt-4">
            121 King Street, Melbourne VIC 3000, Australia
          </p>
          <p className="text-yellow-300 text-sm">
            info@example.com <br />
            888-123-4567
          </p>
        </div>
      </div>
    </div>
  );
}
