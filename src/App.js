import Button from './components/button';
import Header from './components/header';
import InfoBox from './components/info-box';
import coins from './assets/img/ta-coins.svg';
import left from './assets/img/ta-coin-left.svg';
import right from './assets/img/ta-coin-right.svg';
import stars from './assets/img/ta-stars.svg';
import lightshow from './assets/img/ta-lightshow.svg';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function App() {
  const leftImageRef = useRef();
  const rightImageRef = useRef();
  const masterTimeline = useRef();
  const slideUpLeftTimeline = useRef();
  const slideUpRightTimeline = useRef();

  useEffect(() => {
    slideUpLeftTimeline.current = gsap.timeline();
    slideUpRightTimeline.current = gsap.timeline();
    slideUpLeftTimeline.current
      .to(leftImageRef.current, {
        y: '0',
        opacity: 1,
        delay: 0.4,
        duration: 1,
      })
      .to(leftImageRef.current, {
        y: '40',
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    slideUpRightTimeline.current
      .to(rightImageRef.current, {
        y: '0',
        opacity: 1,
        delay: 0.4,
        duration: 1,
      })
      .to(rightImageRef.current, {
        y: '30',
        duration: 1.5,
        ease: 'power1.inOut',
        // delay: 1.4,
        yoyo: true,
        repeat: -1,
      });
    masterTimeline.current = gsap
      .timeline({ delay: 0.5 })
      .add(slideUpLeftTimeline.current)
      .add(slideUpRightTimeline.current, 0.2);
  }, []);
  return (
    <div className="h-screen bg-[#171954] bg-home text-white">
      <Header></Header>

      {/* Spinning Lights */}
      <div className="lightshow">
        <img
          className="img-lightshow animate-[rotate_80s_infinite_linear]"
          src={lightshow}
          alt=""
        />
      </div>
      {/* Stars */}
      <img className="img-stars" src={stars} alt="" />
      {/* Content */}
      <div className="text-center mt-4 md:mt-0">
        <div className="px-4 md:px-0">
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
            <p className="md:text-2xl mt-6 font-light animate-[slideInx2_1s_ease-in-out_1.2s_both]">
              Stand a chance to win{' '}
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="md:text-2xl font-light animate-[slideInx2_1s_ease-in-out_1.3s_both]">
              <span className="font-extrabold"> N3,000,000</span> everyday for
              the next 5 days
            </p>
          </div>
          <InfoBox></InfoBox>
          <Button></Button>
        </div>

        {/* Desktop Images */}
        <div className="hidden md:block">
          <img
            className="img-coins bottom-0 animate-[slideInImage_1s_ease-in-out_0.4s_both]"
            src={coins}
            alt=""
          />
          <img className="img-coin-left" src={left} alt="" ref={leftImageRef} />
          <img
            className="img-coin-right"
            src={right}
            alt=""
            ref={rightImageRef}
          />
        </div>
      </div>
      {/* <h1 className=" text-3xl font-bold underline">Hello world!</h1>
      <p className="">Na paragraph be dis</p>
      <div className="w-2/3 h-2/3 bg-glass"></div> */}
    </div>
  );
}

export default App;
