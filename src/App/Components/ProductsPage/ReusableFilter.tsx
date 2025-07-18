import type { IFilterOption, IFilterProps } from "@/App/Interfaces";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ReusableFilter = ({ title, options }: IFilterProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleToggle = (option: IFilterOption) => {
    setSelectedValues((prev) => {
      const isSelected = prev.includes(option.value);
      const updated = isSelected
        ? prev.filter((value) => value !== option.value)
        : [...prev, option.value];
      console.log(
        `Dont hurt me: said by ${option.label} = ${option.value} & total selected: ${updated}`
      );

      return updated;
    });
  };

  return (
    <div className="bg-[#FFF7EC] w-full lg:mx-auto mx-5 lg:w-[286px]  rounded-xl px-[9px] py-3 mb-5 border-1 border-[#E5E5E5] ">
      <h3 className="font-medium text-xl text-[#1A1A1A] mb-2">{title}</h3>
      <ul className="space-y-2">
        {options.map((option) => (
          <li
            key={option.value}
            className="flex items-center justify-between bg-white px-4 py-2 rounded  border-1 cursor-pointer hover:bg-orange-100 transition"
          >
            <div className="flex items-center  gap-3">
              <span className="text-[#666666]">{option.label}</span>
              <div
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: option.value.toLowerCase() }}
              />
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8">
              <Checkbox
                onClick={() => handleToggle(option)}
                className="w-5 h-5 data-[state=checked]:border-[#FCAB3F] data-[state=checked]:bg-[#FCAB3F] data-[state=checked]:text-white"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReusableFilter;
