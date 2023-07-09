import PropTypes from "prop-types";

import {
  RiHome3Line,
  RiPercentLine,
  RiPieChartLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

export const Footertbar = ({ onChange, showMenu }) => {
  const toggleMenu = (event) => {
    event.preventDefault();
    onChange(!showMenu);
  };

  return (
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-[#ec7c6a] flex items-center justify-between py-4 px-8 rounded-tr-xl rounded-tl-xl">
      <button className="p-2">
        <RiHome3Line />
      </button>
      <button className="p-2">
        <RiPercentLine />
      </button>
      <button className="p-2">
        <RiPieChartLine />
      </button>
      <button onClick={toggleMenu} className="p-2 text-white">
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </nav>
  );
};

Footertbar.propTypes = {
  onChange: PropTypes.func,
  showMenu: PropTypes.bool,
};
