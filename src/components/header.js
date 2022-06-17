import React from 'react';

const Header = () => {
  return (
    <div className="px-5 md:px-28 py-2 md:py-5 flex justify-between items-center">
      <img src="/assets/ta-logo.svg" alt="" />
      <div className="flex items-center">
        <img
          height="90px"
          src="/assets/ta-calendar-icon.svg"
          alt=""
          className="mr-2"
        />
        <div className="">
          <p className="font-bold text-lg">Day 1</p>
          <p className="text-sm opacity-60">of 5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
