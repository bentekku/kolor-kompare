/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        custom: "#eee",
      },
      boxShadow: {
        "custom-header": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "custom-search": "2px 4px 4px rgba(0, 0, 0, 0.25)",
        "custom-color-box": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        "custom-sm": "16px",
        "custom-md": "24px",
        "custom-lg": "32px",
      },
      fontWeight: {
        "custom-sm": "300",
        "custom-md": "400",
        "custom-lg;": "600",
      },
      padding: {
        "custom-header": "16px 22px",
      },
    },
  },
  plugins: [],
};
