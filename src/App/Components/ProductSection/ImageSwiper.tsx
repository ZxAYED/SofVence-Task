import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Slider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);

    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image, index) => (
        <div className="keen-slider__slide" key={index}>
          <img
            src={image}
            className="object-contain h-64  w-full "
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
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 !p-2 rounded-b-lg text-center">
            <div className="flex justify-center !space-x-1 pb-4">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentSlide ? "bg-[#F04436]" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};
export default Slider;
