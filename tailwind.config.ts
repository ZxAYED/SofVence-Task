import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...fontFamily.sans],
            },
        },
    },
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [],
};
