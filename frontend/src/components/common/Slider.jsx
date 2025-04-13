import React, { useState } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div id="slider-wrapper" className="w-[640px] h-[300px] mx-auto my-2 relative bg-black/50 overflow-hidden">
      <div className="inner-wrapper w-[640px] h-[300px] absolute top-0 left-0 overflow-hidden">
        {/* Radio Inputs */}
        <input
          checked={activeSlide === 0}
          type="radio"
          name="slide"
          className="control hidden"
          id="Slide1"
          onChange={() => handleSlideChange(0)}
        />
        <label htmlFor="Slide1" id="s1" className={`w-3 h-3 bg-black absolute left-1/2 bottom-[25px] -ml-[36px] rounded-full cursor-pointer z-[999] ${activeSlide === 0 ? "opacity-100" : "opacity-30 hover:opacity-50"}`}></label>

        <input
          checked={activeSlide === 1}
          type="radio"
          name="slide"
          className="control hidden"
          id="Slide2"
          onChange={() => handleSlideChange(1)}
        />
        <label htmlFor="Slide2" id="s2" className={`w-3 h-3 bg-black absolute left-1/2 bottom-[25px] -ml-[12px] rounded-full cursor-pointer z-[999] ${activeSlide === 1 ? "opacity-100" : "opacity-30 hover:opacity-50"}`}></label>

        <input
          checked={activeSlide === 2}
          type="radio"
          name="slide"
          className="control hidden"
          id="Slide3"
          onChange={() => handleSlideChange(2)}
        />
        <label htmlFor="Slide3" id="s3" className={`w-3 h-3 bg-black absolute left-1/2 bottom-[25px] ml-[12px] rounded-full cursor-pointer z-[999] ${activeSlide === 2 ? "opacity-100" : "opacity-30 hover:opacity-50"}`}></label>

        <input
          checked={activeSlide === 3}
          type="radio"
          name="slide"
          className="control hidden"
          id="Slide4"
          onChange={() => handleSlideChange(3)}
        />
        <label htmlFor="Slide4" id="s4" className={`w-3 h-3 bg-black absolute left-1/2 bottom-[25px] ml-[36px] rounded-full cursor-pointer z-[999] ${activeSlide === 3 ? "opacity-100" : "opacity-30 hover:opacity-50"}`}></label>

        {/* Slides */}
        <div
          className="overflow-wrapper w-[400%] h-full absolute top-0 left-0 overflow-y-hidden z-[1] transition-all duration-300 ease-in-out"
          style={{ marginLeft: `${-activeSlide * 100}%` }}
        >
          <a className="slide inline-block w-[25%] float-left" href="">
            <img src="http://placehold.it/940x470" alt="Slide 1" />
          </a>
          <a className="slide inline-block w-[25%] float-left" href="">
            <img src="http://placehold.it/940x470" alt="Slide 2" />
          </a>
          <a className="slide inline-block w-[25%] float-left" href="">
            <img src="http://placehold.it/940x470" alt="Slide 3" />
          </a>
          <a className="slide inline-block w-[25%] float-left" href="">
            <img src="http://placehold.it/940x470" alt="Slide 4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;