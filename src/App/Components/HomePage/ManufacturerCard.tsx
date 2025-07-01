
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import image1 from "../../../../public/Rectangle 5.png";
import image2 from "../../../../public/Rectangle 6.png";
import image3 from "../../../../public/Rectangle 7.png";
import image4 from "../../../../public/Rectangle 7.png";
import { FaShoppingBasket } from "react-icons/fa";



export default function ManufacturerCard({ name, shopName, image, rating, totalReviews }) {
  return (
    <Card className="hover:shadow-lg transition duration-300 bg-[#0000001A]">
      <CardContent className="flex flex-col items-center p-">
        <Avatar className="">
          <div className="flex items-center justify-between gap-4">
            <div>
                <div><FaShoppingBasket /></div>
                <h4 className="text-xl font-semibold text-[#1A1A1A]">{shopName}</h4>
                <p className="flex items-center"><IoLocationOutline /> abc street, USA</p>
            </div>
            <div>
                <div className="flex items-center justify-evenly bg-white rounded-[8px] shadow-md px-2">
                    <Star className="w-4 h-4 text-yellow-500" /> {rating}
                </div>
                <p className="underline text-[#F04436] cursor-pointer">Details</p>
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
