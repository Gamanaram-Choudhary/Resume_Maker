import React from "react";
import { Home } from "react-feather";

const SectionHeader = () => {
  return (
    <div className="w-full">
      <div className="items-start justify-between py-4 border-b md:flex md:py-6 ">
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
            className="px-4 py-2 text-center text-white duration-150 font-medium bg-sky-600 rounded-lg hover:bg-sky-500 active:bg-sky-500 md:text-lg flex items-center justify-center space-x-2"
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
