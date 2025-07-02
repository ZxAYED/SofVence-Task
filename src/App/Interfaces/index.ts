/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ICategory {
    name: string;
    image: string;
}
export interface ISlider {
    images: string[];
    instanceRef: any;
    sliderRef: any;
}
export interface IFilterOption {
    label: string;
    value: string;
}

export interface IFilterProps {
    title: string;
    options: IFilterOption[];

    onChange?: (selected: string[]) => void;
}