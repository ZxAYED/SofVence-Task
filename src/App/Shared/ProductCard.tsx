import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import type { IProduct } from "../Interfaces";
import Slider from "./ImageSwiper";

interface ProductCardProps {
  product: IProduct;
}
const ProductCard = ({ product }: ProductCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handleBookmark = () => {
    console.log("Bookmark clicked");
  };
  return (
    <Card className=" relative w-full max-w-sm mx-auto h-[430px] md:h-[480px] lg:h-[430px] shadow-lg">
      <CardContent className="p-0">
        <div className="relative rounded-t-lg">
          <Button
            onClick={handleBookmark}
            className="absolute top-0 right-4 z-10 bg-gray-400/90 hover:bg-gray-500  rounded-full h-10 w-10"
          >
            <Heart className="h-10 w-10 text-white" />
          </Button>

          <div className="flex  mt-0 pt-0  ">
            <Slider
              instanceRef={instanceRef}
              sliderRef={sliderRef}
              images={product?.images}
            />
          </div>
        </div>

        <div className=" p-4 !space-y-2">
          <div>
            <div className="flex justify-center !space-x-1 pb-4">
              {product?.images.map((_, idx) => (
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
              {product?.name.length > 100
                ? `${product?.name.slice(0, 100)}...`
                : product?.name}
            </h3>

            <div className="flex items-center justify-between !space-x-1">
              <img
                src="/images/star.png"
                alt="product image"
                className="object-contain h-4 w-4  "
              />
              <span className="text-sm   font-medium ">
                {product?.rating.score}
              </span>
            </div>
          </div>

          <div className="flex items-center absolute bottom-3  justify-between">
            <div className="flex items-center !space-x-2">
              <span className="text-sm font-semibold text-[#FCAB3F]">
                $ {product?.priceTiers[0].quantityRange}
              </span>
              <span className="text-md  text-[#484848]">•</span>
              <span className="text-xs text-[#484848]">
                MOQ : {product.minimumOrderQuantity}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
