import React from 'react';
import arrowIcon from '../assets/img/ta-arrowleft-icon.svg';

const Button = () => {
  return (
    <button className="capitalize p-4 bg-[#ECAB03] flex justify-between">
      <span className="grow mx-4 font-semibold">Play the game</span>{' '}
      <img src={arrowIcon} alt="" />
    </button>
  );
};

export default Button;
