import type { IFilterOption, IFilterProps } from "@/App/Interfaces";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const FilterSection = ({ title, options }: IFilterProps) => {
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
    <div className="bg-[#FFF7EC] w-[286px] mb-5 rounded-xl p-4  ">
      <h3 className="font-medium text-xl text-[#1A1A1A] mb-2">{title}</h3>
      <ul className="space-y-2">
        {options.map((option) => (
          <li
            key={option.value}
            className="flex items-center justify-between bg-white px-4 py-2 rounded-md shadow-sm border-1 cursor-pointer hover:bg-orange-100 transition"
          >
            <span className="text-[#666666]">{option.label}</span>

            <Checkbox
              onClick={() => handleToggle(option)}
              className="data-[state=checked]:border-[#FCAB3F] data-[state=checked]:bg-[#FCAB3F] data-[state=checked]:text-white "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
