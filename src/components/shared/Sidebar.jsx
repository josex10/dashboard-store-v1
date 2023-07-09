import PropTypes from "prop-types";

import {
  RiHome3Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification2Line,
  RiSettings3Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

export const Sidebar = ({ showMenu }) => {
  return (
    <div
      className={`bg-[#1F1D2B] fixed letf-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li className="text-2xl text-gray-300 font-bold uppercase text-center my-5">
            Logo
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 block rounded-xl text-center text-white flex justify-center"
            >
              <RiHome3Line className="text-2xl " />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white  p-4 block rounded-xl text-center text-white flex justify-center text-[#ec7c6a] transition-colors"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white  p-4 block rounded-xl text-center text-white flex justify-center text-[#ec7c6a] transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white  p-4 block rounded-xl text-center text-white flex justify-center text-[#ec7c6a] transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white  p-4 block rounded-xl text-center text-white flex justify-center text-[#ec7c6a] transition-colors"
            >
              <RiNotification2Line className="text-2xl" />
            </a>
          </li>

          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white  p-4 block rounded-xl text-center text-white flex justify-center text-[#ec7c6a] transition-colors"
            >
              <RiSettings3Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="pl-4">
          <li className=" hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white  p-4 block rounded-xl text-center text-white flex justify-center text-[#ec7c6a] transition-colors"
            >
              <RiLogoutBoxRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  showMenu: PropTypes.bool,
};
