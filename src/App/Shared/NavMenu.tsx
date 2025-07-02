import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div>
        <div className="flex  items-center gap-4 justify-between max-w-[1520px] mx-auto p-4">
          <div className="text-5xl font-bold hidden xl:block">
            Welcome to SoftVence
          </div>
          <div className="text-xl flex  font-bold justify-center items-center gap-20  ">
            <Link to="/"> Shop 1</Link>
            <Link to="/products"> Products</Link>
            <Link to="/"> Shop 3 </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
