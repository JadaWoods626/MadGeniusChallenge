"use client";

import React from "react";
import { useState } from "react";

export default function slideshow() {
  const [testID, setTestID] = useState(1);

  var data = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Jenny Doe",
      title: "Head Hammerer",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "John Wayne",
      title: "Head Smith",
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Stacy Smith",
      title: "Forge Lighter",
    },
  ];

  function next() {
    if(testID < data.length) {
      setTestID(testID + 1)
    } else {
      setTestID(1)
    }
  }

  function prev() {
    if(testID > 1) {
      setTestID(testID - 1)
    } else {
      setTestID(data.length)
    }
  }

  return (
    <div className="slideshowstyles flex justify-center items-center flex-col text-center py-24">
      <div className="flex justify-center items-center w-full ">
        {data.map((quote) => {
          if (quote.id == testID) {
            return <p key={quote.id} className="w-6/12 text-2xl">{quote.quote}</p>;
          }
        })}
      </div>
      <div className="flex flex-row justify-center items-center w-full mt-10">
        <img src="/arrow1.svg" className="w-12 cursor-pointer" onClick={prev} />
          {data.map((quote) => {
            if (quote.id == testID) {
              return (
                <div key={quote.id} className="mx-60 font-semibold">
                  <p>{quote.name}</p>
                  <p>{quote.title}</p>
                </div>
              );
            }
          })}
        <img
          src="/arrow1.svg"
          className="w-12 cursor-pointer"
          style={{ transform: "rotate(180deg)" }}
          onClick={next}
        />
      </div>
      <div className="mt-6 flex flex-row">
        {data.map((quote) => {
          if (quote.id == testID) {
            return <span key={quote.id} className="dotFilled mx-3"></span>;
          } else {
            return <span key={quote.id} className="dot mx-3"></span>;
          }
        })}
      </div>
    </div>
  );
}
