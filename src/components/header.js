import React from 'react';
import logo from '../assets/img/ta-logo.svg';
import calIcon from '../assets/img/ta-calendar-icon.svg';

const Header = () => {
  return (
    <div className="px-5 md:px-28 py-5 flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex items-center">
        <img height="90px" src={calIcon} alt="" className="mr-2" />
        <div className="">
          <p className="font-bold text-lg">Day 1</p>
          <p className="text-sm opacity-60">of 5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
