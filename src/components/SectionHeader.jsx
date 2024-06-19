import React from 'react';

const SectionHeader = () => {
  return (
    <div className="w-full mx-auto">
      <div className="items-start justify-between py-4 border-b md:flex md:py-6">
        <div>
          <h3 className="text-gray-800 text-2xl font-bold md:text-3xl">
            Resume Maker
          </h3>
          <p className="text-gray-600 mt-2 md:text-lg">
            Embrace the flexibility to express your unique professional identity.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <a
            href="/"
            className="block px-4 py-2 text-center text-white duration-150 font-medium bg-sky-600 rounded-lg hover:bg-sky-500 active:bg-sky-700 md:text-lg"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
