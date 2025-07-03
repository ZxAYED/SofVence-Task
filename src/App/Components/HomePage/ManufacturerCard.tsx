import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";

type ManufacturerCardProps = {
  shopName: string;
  location: string;
  image: string[];
  rating: number;
};

const ManufacturerCard = ({
  shopName,
  location,
  image,
  rating,
}: ManufacturerCardProps) => {
  return (
    <Card className="w-full max-w-sm lg:max-w-xl mx-auto hover:shadow-lg transition duration-300">
      <CardContent className="flex flex-col"> 
        <Avatar>
          <div className="md:flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] md:w-16 md:h-16 flex justify-center items-center bg-[#E8EAED] p-4 rounded-full">
                {" "}
                <FaShoppingBasket className="w-10 h-10" />{" "}
              </div>
              <div className="text-start">
                <h4 className="text-base md:text-xl font-semibold text-[#1A1A1A]">
                  {shopName}
                </h4>
                <div className="flex items-start lg:items-center">
                  <IoLocationOutline className="" />{" "}
                  <p className="text-xs md:text-sm text-[#666666]">
                    {location}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center mt-3 md:mt-0 px-2 md:px-0 ">
              <div className="flex items-center justify-evenly bg-white rounded-[8px] shadow-md px-2">
                <Star className="w-4 h-4 text-yellow-500 mr-2" /> {rating}
              </div>
              <p className="underline text-[#F04436] cursor-pointer pt-2">
                Details
              </p>
            </div>
          </div>
        </Avatar>
        <div className="grid grid-cols-2 items-center gap-5 !mt-10">
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="w-[200px] h-[120px] rounded-[12px]"
            />
          ))}
          {/* <img
            src={image1}
            alt="Product 1"
            className="w-[200px] h-[120px] rounded-[12px]"
          />
          <img
            src={image3}
            alt="Product 3"
            className="w-[200px] h-[120px] rounded-[12px]"
          />
          <img
            src={image4}
            alt="Product 4"
            className="w-[200px] h-[120px] rounded-[12px]"
          /> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ManufacturerCard;
