import React from 'react';

const HeroText = () => {
  return (
    <>
      <div className="overflow-hidden">
        <h2 className="text-3xl md:text-7xl animate-[slideInx2_1s_ease-in-out_1s_both]">
          Unlock to
        </h2>
      </div>
      <div className="overflow-hidden">
        <h2 className="text-3xl md:text-7xl font-bold animate-[slideInx2_1s_ease-in-out_1.1s_both]">
          Power your dreams!
        </h2>
      </div>
      <div className="overflow-hidden">
        <p className="md:text-2xl md:mt-6 mt-3 font-light animate-[slideInx2_1s_ease-in-out_1.2s_both]">
          Stand a chance to win{' '}
        </p>
      </div>
      <div className="overflow-hidden">
        <p className="md:text-2xl font-light animate-[slideInx2_1s_ease-in-out_1.3s_both]">
          <span className="font-extrabold"> N3,000,000</span> everyday for the
          next 5 days
        </p>
      </div>
    </>
  );
};

export default HeroText;
