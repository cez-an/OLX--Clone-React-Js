import type React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

type NavbarProps = {
  toggleModal: () => void;
  toggleModalSell: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleModal, toggleModalSell }) => {
  return (
    <>
      <nav className="bg-gray-300/40 w-full">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between py-2 px-4">
          <img src="/icons/10001.svg" className="w-12" alt="icon" />

          <div className="hidden lg:flex relative ml-5 border rounded w-[260px]">
            <IoMdSearch className="absolute text-2xl top-2.5 left-2 text-gray-500" />
            <IoIosArrowDown className="absolute text-2xl top-2.5 right-2 text-gray-500 pointer-events-none" />
            <select
              className="appearance-none py-2 pl-9 pr-8 w-full text-gray-700 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select State
              </option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
            </select>
          </div>

          <div className="relative ml-5 border-2 rounded overflow-hidden flex-1 max-w-[800px]">
            <input
              type="text"
              className="py-2 pl-3 pr-12 w-full focus:outline-none"
              placeholder='Search "Cars"'
            />
            <button className="absolute top-0 right-0 bg-black text-white h-full w-11 flex items-center justify-center">
              <IoMdSearch className="text-2xl" />
            </button>
          </div>

          <div className="hidden md:flex ml-4 relative">
            <select className="text-center font-bold border-0 focus:outline-none appearance-none pr-6">
              <option>ENGLISH</option>
              <option>हिन्दी</option>
            </select>
            <IoIosArrowDown className="absolute top-1 right-0 text-xl text-gray-500" />
          </div>

          <div className="flex items-center gap-5 ml-4">
            <FaRegHeart className="text-2xl cursor-pointer" />
            <p onClick={toggleModal} className="cursor-pointer">
              Login
            </p>
            <img
              src="/assets/addButton.png"
              className="w-24 cursor-pointer"
              onClick={toggleModalSell}
              alt="Sell"
            />
          </div>
        </div>
      </nav>

      <div className="hidden lg:flex border-t-2 border-b-2  border-gray-300/40  bg-white w-full mt-1">
        <div className="max-w-[1400px] mx-auto flex items-center px-6 py-2 w-full">
          <p className="flex gap-2 font-semibold">
            ALL CATEGORIES
            <IoIosArrowDown className="text-xl" />
          </p>
          <ul className="ml-10 flex gap-5 text-sm flex-wrap">
            <li>Cars</li>
            <li>Motorcycles</li>
            <li>Mobile Phones</li>
            <li>For Sale: Homes & Apartments</li>
            <li>Scooters</li>
            <li>Commercial & Other Vehicles</li>
            <li>For Rent: Homes & Apartments</li>
          </ul>
          <p className="ml-auto font-medium">
            {new Date()
              .toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
              .replace(",", "")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
