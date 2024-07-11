import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Features from "./Feature";
import Contact from "../Contact/Contact";
import Navbar from "./Navbar";

export default () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <section className="mt-10 mx-auto pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-3xl xl:text-5xl">
            One-Stop Destination
            <span className="text-indigo-400"> Professional Resumes</span>
          </h1>
          <p className="text-gray-300  text-lg leading-relaxed lg:ml-0 text-justify">
            Empower Your Career Journey: Elevate your professional narrative
            with our all-in-one resume platform, offering tailored solutions for
            every career stage and aspiration.
          </p>
          <div className="mt-7 lg:mt-0">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-8/12 sm:w-10/12 lg:w-6/12 mx-auto"
              alt="Heatmap illustration"
            />
          </div>
          <div className="pt-10 space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              to="/make_resume"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto hover:bg-gray-400 hover:text-white"
            >
              Try it out
            </Link>
          </div>
        </div>
      </section>

      <Features />
      {/* <Contributor /> */}
      <Contact />
    </div>
  );
};
