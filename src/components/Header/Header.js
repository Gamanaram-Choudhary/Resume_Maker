import { Link } from "react-router-dom";
import Features from "./Feature";
import Contact from "../Contact/Contact";

export default () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
            <li>
              <Link to="/login" className="flex items-center text-gray-200">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="flex items-center text-gray-200">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            One-Stop Destination
            <span className="text-indigo-400"> Professional Resumes</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-lg leading-relaxed sm:mx-auto lg:ml-0 text-justify">
            Empower Your Career Journey: Elevate your professional narrative
            with our all-in-one resume platform, offering tailored solutions for
            every career stage and aspiration.
          </p>
          <div className="flex justify-center lg:justify-start mt-7 lg:mt-0">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-8/12 sm:w-10/12 lg:w-6/12 mx-auto"
              alt="Heatmap illustration"
            />
          </div>
          <div className="pt-10 flex items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              to="/make"
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
