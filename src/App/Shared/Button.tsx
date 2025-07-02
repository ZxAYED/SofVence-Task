import { ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const SharedButton = () => {
  return (
    <Button className="px-6 py-6 border-t-1 text-[#F04436]  shadow-xl rounded-[20px] bg-white  text-lg hover:bg-gray-200">
      Explore More
      <span className="ml-2">
        {" "}
        <ChevronRight></ChevronRight>
      </span>
    </Button>
  );
};

export default SharedButton;
