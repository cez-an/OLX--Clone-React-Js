import type React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

type NavbarProps = {
  toggleModal: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleModal }) => {
  return (
    <>
      <nav className="relative z-10 py-2 bg-gray-300/40 flex items-center justify-start px-[1%] w-screen">
        <img src="/icons/10001.svg" className="w-12 " alt="icon" />
        <div className="relative ml-5 border max-w-[278px] rounded">
          <IoMdSearch className="absolute text-2xl top-2.5 left-2 text-gray-500" />
          <IoIosArrowDown className="absolute text-2xl top-2.5 right-2 pointer-events-none text-gray-500" />
          <select
            className="appearance-none border py-2 pl-9 pr-8 w-full text-gray-700 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select State
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Delhi">Delhi (NCT)</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>
        </div>
        <div className="relative ml-5 border-2 w-full max-w-[1129px] rounded">
          <div className="absolute bg-black w-11 h-full right-0 rounded-r"></div>

          <input
            type="text"
            className="relative py-2 pl-3 text-black rounded w-full pr-12"
            placeholder='Search "Cars"'
          />
          <IoMdSearch className="absolute text-2xl text-white top-2.5 right-2" />
        </div>

        <div className="relative flex ">
          <select
            name="language"
            id=""
            className="  text-center ml-4 pr-7 font-bold border-0 w-full focus:outline-none appearance-none"
          >
            <option value="">ENGLISH</option>
            <option value="">हिन्दी</option>
          </select>
          <IoIosArrowDown className="absolute text-2xl top-0.5 right-0 pointer-events-none text-gray-500" />
        </div>

        <FaRegHeart className="text-2xl ml-4 cursor-pointer" />

        <div className="flex justify-center items-center gap-5 ml-5">
          <p className="cursor-pointer" onClick={toggleModal}>
            Login
          </p>
          <img
            src="/assets/addButton.png"
            alt=""
            className="w-25 cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
