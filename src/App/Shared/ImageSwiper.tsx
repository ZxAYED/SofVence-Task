import "keen-slider/keen-slider.min.css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import type { ISlider } from "../Interfaces";

const Slider = ({ images, instanceRef, sliderRef }: ISlider) => {
  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);

    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider -mt-6">
      {images.map((image, index) => (
        <div className="keen-slider__slide" key={index}>
          <img
            src={image}
            className="object-contain h-60 max-w-[356px] mt-0  w-full "
            alt="Image of a product"
          />
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 !p-2 rounded-full shadow text-[#F04436]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 !p-2 rounded-full shadow text-[#F04436]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};
export default Slider;
