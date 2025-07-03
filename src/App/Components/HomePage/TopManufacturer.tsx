// components/TopRatedManufacturers.jsx
// import ManufacturerCard from "./ManufacturerCard";

import SharedButton from "@/App/Shared/Button";
import { Link } from "react-router-dom";
import ManufacturerCard from "./ManufacturerCard";
import image1 from "../../../../public/Rectangle 5.png";
import image2 from "../../../../public/Rectangle 6.png";
import image3 from "../../../../public/Rectangle 7.png";
import image4 from "../../../../public/Rectangle 7.png";

const manufacturers = [
  {
    id: 1,
    shopName: "Samsung Electronics",
    name: "Samsung",
    location: "Seoul, South Korea",
    rating: 4.9,
    totalReviews: 1200,
    images: [image1, image2, image3, image4],
  },
  {
    id: 2,
    shopName: "Apple Store",
    name: "Apple",
    location: "California, USA",
    rating: 4.8,
    totalReviews: 1500,
    images: [image1, image2, image3, image4],
  },
  {
    id: 3,
    shopName: "Sony Corporation",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.7,
    totalReviews: 980,
    images: [image1, image2, image3, image4],
  },
  {
    id: 4,
    shopName: "LG Electronics",
    name: "LG",
    location: "Seoul, South Korea",
    rating: 4.6,
    totalReviews: 875,
    images: [image1, image2, image3, image4],
  },
  {
    id: 5,
    shopName: "Samsung Digital Plaza",
    name: "Samsung",
    location: "Suwon, South Korea",
    rating: 4.7,
    totalReviews: 1025,
    images: [image1, image2, image3, image4],
  },
  {
    id: 6,
    shopName: "Sony Center",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.5,
    totalReviews: 740,
    images: [image1, image2, image3, image4],
  },
];
const TopRatedManufacturers = () => {
  return (
    <section className="py-10 max-w-[1520px] !mx-auto mt-20">
      <div className="mx-auto  text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-start">
          Top Rated Manufacturers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 md:gap-4 lg:gap-8">
          {manufacturers.map((mfg) => (
            <ManufacturerCard
              key={mfg.id}
              shopName={mfg.shopName}
              location={mfg.location}
              image={mfg.images}
              rating={mfg.rating}
            />
          ))}
        </div>
      </div>
      <Link to="/products">
        <div className="max-w-[1520px] mx-auto flex justify-center mt-12 ">
          <SharedButton></SharedButton>
        </div>
      </Link>
    </section>
  );
};

export default TopRatedManufacturers;
