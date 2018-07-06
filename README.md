# React Drum Machine

### A react recreation of an angular app I previously made (https://drum-mach.firebaseapp.com/).

#### By Brea Clark

### Component Structure

<img src="https://raw.githubusercontent.com/breaclark/react-drum-machine/master/IMG_2584.JPG">
<img src="https://raw.githubusercontent.com/breaclark/react-drum-machine/master/new_diagram.jpg">

### Notes & Struggles

* I used CSS Modules instead of CSS Objects as I've been using that throughout this week.
* "Controls" is a special word, and if you use it in your file name for a component, react will refuse to recognize it.
* The correct place to import google fonts is somewhat unclear to me. I imported it in one component and was able to use it in another without re importing it. Later it stopped working so I did have to reimport it.

### Differences between Angular and React

* I organized the sounds differently and it seems DRY-er in react

### To install dependencies run this:

run `npm install`
run `npm run start`
open http://localhost:8080/ in browser

### Commands that were used to make this template:

Adds proper syntax highlighting to JSX:
`apm install react@0.16.2`
<br>
`npm init`
<br>
`npm install react@15.5.4 react-dom@15.5.4 --save`
<br>
`npm install webpack@3.4.0 --save-dev`
<br>
`npm install webpack@3.4.0 -g`
<br>
`npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev`
<br>
`npm install prop-types@15.5.10 --save`
<br>
`npm install webpack-dev-server@2.5.0 -g`
<br>
`npm install webpack-dev-server@2.5.0 --save-dev`
<br>
`npm install react-hot-loader@3.0.0-beta.7 --save-dev`
<br>
`npm install html-webpack-plugin@2.29.0 --save-dev`
<br>
`npm install eslint -g`
<br>
`npm install eslint-plugin-react -g`
<br>
`npm install eslint --save-dev`
<br>
`eslint --init`
<br>
`eslint src/** src/**/**`
<br>
`npm install eslint-loader --save-dev`
<br>
`npm install --save styled-jsx`
