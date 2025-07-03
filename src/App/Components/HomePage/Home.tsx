import type { IProduct } from "@/App/Interfaces";
import SharedButton from "@/App/Shared/Button";
import ProductCard from "@/App/Shared/ProductCard";
import SearchBar from "@/App/Shared/SearchBar";
import Thambnail from "@/App/Shared/Thambnail";
import { FetchData } from "@/App/Utils/FetchData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Categories from "./Categories";
import JoinUs from "./JoinUs";
import TopManufacturer from "./TopManufacturer";

const Home = () => {
  const [Products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData();

      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-5 lg:mx-auto mb-20">
      <SearchBar />

      <Thambnail />
      <Categories number={8} />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mt-20 max-w-[1520px] !mx-auto">
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
      <Link to="/products">
        <div className="max-w-[1520px] mx-auto flex justify-center mt-12 ">
          <SharedButton></SharedButton>
        </div>
      </Link>
      <TopManufacturer />
      <JoinUs />
    </div>
  );
};
export default Home;
