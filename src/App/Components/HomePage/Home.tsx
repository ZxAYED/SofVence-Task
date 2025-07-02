import ProductCard from "@/App/Shared/Card";
import Categories from "../Features/CategorySection/Categories";

const Home = () => {
  return (
    <div className="mx-5 2xl:mx-auto mt-20">
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4  mt-20 max-w-[1520px] !mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
