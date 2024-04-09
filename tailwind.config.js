const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      flowbite: {
        indicators: {
          active: {
            off: "bg-blue-blue hover:bg-blue-600 dark:bg-gray-800/50 dark:hover:bg-gray-800",
            on: "bg-blue-500 dark:bg-gray-800",
          },
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("daisyui")],
};
