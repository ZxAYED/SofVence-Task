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
export interface IProduct {
    productId: string;
    name: string;
    brand: string;
    category: string;
    rating: {
        score: number;
        reviews: number;
    };
    minimumOrderQuantity: number;
    priceTiers: IPriceTier[];
    sample: {
        available: boolean;
        price: number;
    };
    variants: IVariant[];
    shipping: {
        type: string;
        description: string;
    };
    actions: ("Add_To_Cart" | "Chat_Now" | "Buy_Now")[];
    description: string;
    images: string[];
    productDetails: {
        keyFeatures: string[];
        additionalFeatures: string[];
        keyAttributes: {
            [key: string]: string;
        };
    };
}

export interface IPriceTier {
    quantityRange: string;
    price: number;
}

export interface IVariant {
    color: string;
    image: string;
}
