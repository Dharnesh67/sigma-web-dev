## HOW TO INSTALL

step 1: Install the package using pip

```
npm install -D tailwindcss
npx tailwindcss init
```

step 2: Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

step 3: Add the tailwindcss directive to your main CSS file. create input.css in src folder

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4: Add the input.css file to your build process.

`npx tailwindcss -i ./src/input.css -o ./output.css`

step 5: Include the output.css file in your HTML file.

`<link href="output.css" rel="stylesheet">`
