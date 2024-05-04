const SectionHeader = () => {
  return (
    <div className="w-[93vw] ">
      <div className="items-start justify-between py-4 border-b md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-2xl font-bold">Resume Builder</h3>
          <p className="text-gray-600 mt-2">
            Embrace the flexibility to express your unique professional
            identity.
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
