import React, { useEffect, useState } from "react";
import { Home } from "react-feather";
// import Navbar from "../Home/Navbar";

const SectionHeader = () => {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <div className="items-start justify-between py-4 border-b md:flex md:py-6">
        <div>
          <h3 className="text-gray-800 text-2xl font-bold md:text-3xl">
            Resume Maker
          </h3>
          <p
            className="mt-2 md:text-2xl lg:text-4xl"
            style={{ fontFamily: "'Clicker Script', cursive" }}
          >
            Embrace the flexibility to express your unique professional
            identity.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <a
            href="/"
            title="Home"
            className="px-3.5 py-1.5 text-center text-white duration-150 font-bold bg-sky-600 rounded hover:bg-sky-400 active:bg-sky-500 md:text-sm flex items-center justify-center space-x-2"
          >
            <Home />
            <span>Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
