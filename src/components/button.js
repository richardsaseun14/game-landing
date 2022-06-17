import React from 'react';
import arrowIcon from '../assets/img/ta-arrowleft-icon.svg';

const Button = () => {
  return (
    <button className="capitalize p-4 bg-[#ECAB03] flex justify-between mx-auto mt-4 animate-[slideIn_1s_ease-in-out_0.2s_both]">
      <span className="grow mx-4 font-semibold">Play the game</span>{' '}
      <img src={arrowIcon} alt="" />
    </button>
  );
};

export default Button;
