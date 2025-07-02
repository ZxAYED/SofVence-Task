import { Card } from "@/components/ui/card";
import img1 from "../../../../public/images/electronics.png";
import img2 from "../../../../public/images/image(1).png";
import img11 from "../../../../public/images/image(10).png";
import img3 from "../../../../public/images/image(2).png";
import img4 from "../../../../public/images/image(3).png";
import img5 from "../../../../public/images/image(4).png";
import img6 from "../../../../public/images/image(5).png";
import img7 from "../../../../public/images/image(6).png";
import img8 from "../../../../public/images/image(7).png";
import img9 from "../../../../public/images/image(8).png";
import img10 from "../../../../public/images/image(9).png";
import img13 from "../../../../public/images/image.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface ICategory {
  name: string;
  image: string;
}

const Categories = () => {
  const handleCategoryClick = (categoryName: string) => {
    console.log(`Dont click me, said by: ${categoryName}`);
  };
  const caterogiesData: ICategory[] = [
    { name: "Electronics", image: img1 },
    { name: "Home & Living", image: img13 },
    { name: "Fashion & Apperel", image: img2 },
    { name: "Health & Beauty", image: img3 },
    { name: "Industrial ", image: img4 },
    { name: "Health & Wellness", image: img5 },
    { name: " Furniture", image: img6 },

    { name: "Men's Clothing", image: img7 },
    { name: "Women's Clothing", image: img8 },
    { name: "Footwear", image: img9 },
    { name: "Accessories", image: img10 },
    { name: "Sportswear", image: img11 },
    { name: "Outwear & Jackets", image: img11 },
  ];
  return (
    <div className=" relative mt-20 max-w-[1520px] !mx-auto">
      <Carousel className="w-full ">
        <CarouselContent className="">
          {caterogiesData.map((category, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2   md:basis-1/4 lg:basis-1/6 xl:basis-1/8    "
            >
              <div className="">
                <Card
                  onClick={() => handleCategoryClick(category.name)}
                  className={`relative overflow-hidden m-0 p-0 border-box h-[140px]  rounded-lg cursor-pointer transition-transform hover:scale-105 $`}
                >
                  <div className="  w-full h-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-fill w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                    />

                    <div className="absolute bottom-2 left-0 right-0 ">
                      <h3 className="text-white bg-black/50  w-fit mx-auto px-2 py-1 rounded-md backdrop-blur-md    text-nowrap">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-0 left-16 bottom-0 opacity-100  ">
          <CarouselPrevious />
        </div>
        <div className="absolute -top-0 right-12 bottom-0 opacity-100  ">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Categories;
