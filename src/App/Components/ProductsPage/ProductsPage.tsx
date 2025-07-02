import type { IProduct } from "@/App/Interfaces";
import ProductCard from "@/App/Shared/ProductCard";
import { FetchData } from "@/App/Utils/FetchData";
import { useEffect, useState } from "react";
import Categories from "../Features/CategorySection/Categories";
import JoinUs from "../HomePage/JoinUs";
import TopRatedManufacturers from "../HomePage/TopManufacturer";
import FilterSection from "./FilterSection";
const ProductsPage = () => {
  const [Products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 max-w-[1520px] mx-auto ">
        <div>
          <FilterSection
            title="Price"
            options={[
              { label: "Under $25", value: "0-25" },
              { label: "$25 - $50", value: "25-50" },
              { label: "$50 - $100", value: "50-100" },
              { label: "Above $100", value: "100-200" },
            ]}
          />
          <FilterSection
            title="Brands"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Samsung", value: "samsung" },
              { label: "Sony", value: "sony" },
              { label: "Puma", value: "puma" },
              { label: "Adidas", value: "adidas" },
              { label: "Nike", value: "nike" },
            ]}
          />
          <FilterSection
            title="Brands"
            options={[
              { label: "4 stars & up", value: "4" },
              { label: "3 stars & up", value: "3" },
              { label: "2 stars & up", value: "2" },
            ]}
          />

          <FilterSection
            title="Color "
            options={[
              { label: "Red ", value: " red" },
              { label: "Blue", value: "blue" },
              { label: "Black ", value: "black" },
              { label: "White  ", value: "white" },
              { label: "Yellow ", value: "yellow" },
              { label: "Green ", value: "green" },
              { label: "Pink ", value: "pink" },
            ]}
          />
          <FilterSection
            title="Size "
            options={[
              { label: "Red ", value: " red" },
              { label: "Blue", value: "blue" },
              { label: "Black ", value: "black" },
              { label: "White  ", value: "white" },
              { label: "Yellow ", value: "yellow" },
              { label: "Green ", value: "green" },
              { label: "Pink ", value: "pink" },
            ]}
          />
          <FilterSection
            title="Availability "
            options={[
              { label: "In stock ", value: " instock" },
              { label: "Out of Stock", value: "outofstock" },
            ]}
          />
          <FilterSection
            title="Features "
            options={[
              { label: "Water proof", value: "waterproof" },
              { label: "Wireless", value: "wireless" },
              { label: "Adjustable", value: "adjustable" },
              { label: "Eco-Friendly", value: "ecofriendly" },
              { label: "Portable", value: "portable" },
            ]}
          />
          <FilterSection
            title="Sort By "
            options={[
              { label: "Price : Low to high", value: "lowToHigh" },
              { label: "  Price : High to Low", value: "highToLow" },
              { label: "Best sellers", value: "bestsellers" },
              { label: "Customer Rating", value: "customerRating" },
            ]}
          />
        </div>
        <div className="max-w-[1100px] ml-auto">
          <Categories number={6} />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mt-20 gap-4  ">
            {Products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="max-w-[1100px] ml-auto">
            {" "}
            <TopRatedManufacturers />
          </div>
        </div>
      </div>
      <JoinUs />
    </div>
  );
};

export default ProductsPage;
