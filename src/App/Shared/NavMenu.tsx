import { Menu, ShoppingCart, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-[1520px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        <div className="text-2xl font-bold text-orange-500">
          <img src="/logo/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-[#666666] font-normal"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-[#666666] font-normal"
            }
          >
            Shop
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-[#666666] font-normal">
                Categories{" "}
                <span className="ml-1">
                  <ChevronDown />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Men</DropdownMenuItem>
              <DropdownMenuItem>Women</DropdownMenuItem>
              <DropdownMenuItem>Accessories</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-[#666666] font-normal"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 font-semibold"
                : "text-[#666666] font-normal"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-xs text-gray-500">Delivered To</span>
            <div className="flex items-center font-medium text-sm">
              USA <span className="ml-1">🇺🇸</span>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
