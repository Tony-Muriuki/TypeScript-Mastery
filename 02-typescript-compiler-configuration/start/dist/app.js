"use strict";
console.log("TypeScript is Awesome");
//For the code above We use tsc <file-name></file-name> to compile manually but we want to configure in that everytime we make a change to the file it is compiled automaticalyy so we use watchmode
//tsc <file-name></file-name> --watch or tsc <file-name></file-name> -w
//---------Compiling Multiple Typescript Files
//----When you are working in a large project you will not have one typescript file youll have multiple files and you need them compiled
//tsc --init will tell the typescript compiler that everything in this folder where we are running the command should be managed by Typescript.
//so i guess the tsc --init command initializes the folder as a typescript project.
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Button is Clicked");
});
// TSCONFIG>JSON STRUCTURE SAMPLE
// {
//   "compilerOptions": {
//     "target": "ES6",
//     "module": "ES6",
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "strict": true,
//     "moduleResolution": "node",
//     "allowJs": true,
//     "sourceMap": true,
//     "esModuleInterop": true,
//     "allowSyntheticDefaultImports": true
//   },
//   "include": ["src/**/*"],
//   "exclude": ["node_modules"]
// }
