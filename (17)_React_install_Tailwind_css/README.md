# React + Vite + Tailwind CSS
https://tailwindcss.com

(Step 1)Terminal = 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

(Step 2) open tailwind.config.js and pest this code.

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

(Step 3) open index.css and Remove all by default css codes then pest this code.

 @tailwind base;
 @tailwind components;
 @tailwind utilities;


(Step 4) install Tailwind CSS extension = (Name: IntelliSense for CSS class names in HTML
Link = https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)


