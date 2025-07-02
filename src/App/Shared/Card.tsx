import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import Slider from "./ImageSwiper";

const ProductCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  const images = [1, 2];
  const handleBookmark = () => {
    console.log("Bookmark clicked");
  };
  return (
    <Card className="w-full max-w-sm mx-auto h-[430px] md:h-[480px] lg:h-[430px] shadow-lg">
      <CardContent className="p-0">
        <div className="relative rounded-t-lg">
          <Button
            onClick={handleBookmark}
            className="absolute top-4 right-4 z-10 bg-gray-400/90 hover:bg-gray-500  rounded-full h-10 w-10"
          >
            <Heart className="h-10 w-10 text-white" />
          </Button>

          <div className="flex  mt-0 pt-0  ">
            <Slider
              instanceRef={instanceRef}
              sliderRef={sliderRef}
              images={["/images/watch.png", "/images/watch.png"]}
            />
          </div>
        </div>

        <div className=" p-4 !space-y-2">
          <div>
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
          </div>
          <div className="flex gap-2 justify-between items-start ">
            <h3 className="text-md w-[85%]   font-medium leading-tight">
              Bluetooth Wireless Earbuds with Deep Bass, 40H Playtime, LED
              Display, IP7 Rating, Mic for Phone and Android, Black.
            </h3>

            <div className="flex items-center justify-between !space-x-1">
              <img
                src="/images/star.png"
                alt="product image"
                className="object-contain h-4 w-4  "
              />
              <span className="text-sm   font-medium ">4.2</span>
            </div>
          </div>

          <div className="flex items-center !pt-3 justify-between">
            <div className="flex items-center !space-x-2">
              <span className="text-sm font-semibold text-[#FCAB3F]">
                $20-$28
              </span>
              <span className="text-md  text-[#484848]">•</span>
              <span className="text-xs text-[#484848]">MOQ : 10</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
