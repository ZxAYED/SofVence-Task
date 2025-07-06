import type { IProduct } from "@/App/Interfaces";
import ProductCard from "@/App/Shared/ProductCard";
import { FetchData } from "@/App/Utils/FetchData";
import { useEffect, useState } from "react";

import SearchBar from "@/App/Shared/SearchBar";
import Categories from "../HomePage/Categories";
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
    <div className="mx-5  mx-w-[1520px] lg:mx-auto">
      <SearchBar />
      <div className="flex flex-col md:flex-row gap-4 max-w-[1520px] mx-auto  ">
        <div>
          <FilterSection />
        </div>
        <div className="max-w-[1100px] ml-auto">
          <Categories number={6} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mt-20 gap-4  ">
            {Products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {Products?.map((product, index) => (
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
