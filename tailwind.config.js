/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2D6974",
                secondary: "#68B39F",
                tertiary: "#CEDFCC",
                quaternary: "#E0ECDE",
                dark: "#474747",
                gray: "#e0e1e5",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [require("flowbite/plugin")],
};
