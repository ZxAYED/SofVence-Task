import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Search, Image } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="w-full max-w-[1520px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 md:px-12 lg:px-48 py-4">
      
      {/* Search Bar */}
      <div className="w-full flex-1 flex items-center border rounded-full shadow-md px-2 sm:px-4 bg-white h-10 md:h-20">
        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-[#F46A39] font-normal px-2 sm:px-4 text-sm md:text-base"
            >
              Products <ChevronDown className="w-4 h-2 ml-" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Products</DropdownMenuItem>
            <DropdownMenuItem>Services</DropdownMenuItem>
            <DropdownMenuItem>Brands</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Input */}
        <div className="flex-1 mx-2 relative">
          <Input
            type="text"
            placeholder="Search for products..."
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-sm md:text-base"
          />
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 md:w-9 md:h-9"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Search by Image */}
      <div className="h-12 md:h-20 flex items-center border rounded-full shadow-md px-4 bg-white w-full md:w-auto">
        <button className="text-sm whitespace-nowrap flex items-center justify-center w-full md:w-auto">
          <Image className="w-5 h-5 mr-2 text-[#F46A39]" />
          <span className="text-[#1A1A1A] text-sm md:text-base font-normal hidden sm:inline">
            Search by Image
          </span>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
