/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile-M": "375px",
      "Mobile-L": "425px",
    },
    extend: {
      width: {
        pwa: "425px",
      },
      boxShadow: {
        "top-bar": "0 8px 16px rgba(0,0,0,0.04)",
        "top-bar-20": "0 8px 20px rgba(0,0,0,0.04)",
        "card-shadow": "0 0 8px rgba(0,0,0,0.04)",
      },
      backgroundColor: {
        "bg-primary": "#FAFAFA",
        "landing-top": "#FDF9F0",
        "nav-clr": "#FFFFFF",
        primary: "#A103D3",
        body: "#C5C5C5",
        "slider-color": "#360146",
      },
      textColor: {
        primary: "#A103D3",
        "slider-color": "#360146",
      },
      borderColor: {
        line: "#EEEEEE",
        primary: "#A103D3",
      },
      borderRadius: {
        btn: "12px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
