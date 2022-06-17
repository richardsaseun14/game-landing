import React from 'react';

const InfoBox = () => {
  return (
    <div className="bg-glass p-6 max-w-fit text-left mx-auto content-box w-[425px] mt-5 animate-[slideIn_1s_ease-in-out]">
      <p className="font-semibold text-center mb-4">🚀 How To Play</p>
      <ol className="list-decimal list-inside text-sm">
        <li>Guess the right combination of numbers</li>
        <li>Win N3,000,000 instantly</li>
      </ol>
      <p className="text-sm my-2">
        Sounds unbelievable? Well, guess right & see for yourself!
      </p>
      <div className="flex p-3 bg-lightblack rounded-[10px]">
        <p className="mr-2">💡</p>
        <p className="text-xs">
          Think well before you guess. You have only 2 attempts per day and even
          after you win, you can come back the next day to try for another
          jackpot!
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
