// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                // Siz istagan gradientni shu yerda nom berib qo‘shasiz
                "custom-gradient":
                    "linear-gradient(102.43deg, #FEFEFE 16.88%, #F9F9F9 104.88%)",
            },
        },
    },
    plugins: [],
};
