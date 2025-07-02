
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import image1 from "../../../../public/Rectangle 5.png";
import image2 from "../../../../public/Rectangle 6.png";
import image3 from "../../../../public/Rectangle 7.png";
import image4 from "../../../../public/Rectangle 7.png";
import { FaShoppingBasket } from "react-icons/fa";

type ManufacturerCardProps = {
  shopName: string;
  location: string;
  image: string[];
  rating: number;
};

const ManufacturerCard = ({ shopName, location, image, rating }: ManufacturerCardProps) => {
  return (
    <Card className="w-[420px] md:w-[350px] lg:w-[485px] hover:shadow-lg transition duration-300">
      <CardContent className="flex flex-col">
        <Avatar >
          <div className="flex justify-between items-center gap-4"> 
            <div className="flex items-center gap-4"> 
              <div className="w-14 h-14 md:w-16 md:h-16 flex justify-center items-center bg-[#E8EAED] p-4 rounded-full"> <FaShoppingBasket className="w-10 h-10" /> </div> 
              <div className="text-start"> 
                <h4 className="md:text-xl font-semibold text-[#1A1A1A]">{shopName}</h4> 
                <p className="flex items-center text-xs md:text-sm text-[#666666]"><IoLocationOutline /> {location} </p> 
                </div>
          </div>
            <div>
              <div className="flex items-center justify-evenly bg-white rounded-[8px] shadow-md px-2">
                <Star className="w-4 h-4 text-yellow-500" /> {rating}
              </div>
              <p className="underline text-[#F04436] cursor-pointer pt-2">Details</p>
            </div>
          </div>
        </Avatar>
        <div className="grid grid-cols-2 items-center gap-5 !mt-10">
          <img src={image2} alt="Product 2" className="w-[200px] h-[120px] rounded-[12px]" />
          <img src={image1} alt="Product 1" className="w-[200px] h-[120px] rounded-[12px]" />
          <img src={image3} alt="Product 3" className="w-[200px] h-[120px] rounded-[12px]" />
          <img src={image4} alt="Product 4" className="w-[200px] h-[120px] rounded-[12px]" />
        </div>
      </CardContent>
    </Card>
  );
}


export default ManufacturerCard;