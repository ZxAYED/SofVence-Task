import type { IProduct } from "@/App/Interfaces";
import ProductCard from "@/App/Shared/ProductCard";
import { FetchData } from "@/App/Utils/FetchData";
import { useEffect, useState } from "react";
import Categories from "../Features/CategorySection/Categories";

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
    <div className="mx-5 2xl:mx-auto mt-20">
      <Categories number={8} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4  mt-20 max-w-[1520px] !mx-auto">
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
    </div>
  );
};

export default Home;
