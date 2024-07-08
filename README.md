Parcel is used for
->Dev Build
->Local Server
->HMR-Hot Module Replacement
->File Watching ALgorithm - written in c++
->Caching - Faster Builds
->Image optimization
->Minification
->Bundling
->Compressing

// const parent = React.createElement("div", {id: "parent"},
// [React.createElement("div",{id:"child1"},
// [React.createElement("h1",{},"This is in h1 tag"),
// React.createElement("h2",{},"This is h2 tag changing something")])],
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"This is in h1 tag"),
// React.createElement("h2",{},"This is h2 tag")])
// ); // nested create element using react

//const heading = React.createElement("h1", {id : "heading"}, "Hello this is from React!");

//console.log(heading); // object

//console.log(parent); // object

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//root.render(parent);

// React.createElement => It first gives the react element and it gives object for JS
// when we call the render() method it converts into HTML element

//const heading = React.createElement("h1", {id: "heading"}, "This is h1 of child");
//console.log(heading);

// JSX is XML or HTML like syntax
//JSX => React.creatElement => React Element-JS Object => HTML element(render)

//const jsxheading = <h1 id="heading" className="head">This is jsxReact</h1>;
//console.log(jsxheading);

// const Title = () => {
// return <h1 id="title">This is title</h1>
// }

// //javascript expression
// const value = 2000;
// // React Functional Component
// const Funheading = function () {
// return(
// <div id="container">
// <h2>{value + 300}</h2>
// <Title/>
// <h1 className="heading">This is functional Component</h1>
// </div>);
// };

Two types of Export/Import

-Default Export/Import

export default <name of variable>;
import <name of variable> from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility Functions)
-useState() - Superpowerful State variables in react
-useEffect()

# 2 types of Routing in web apps

-Client Side Routing
-Server Side Routing

# Types of testing

-unit testing
-Integration testing
-end to end testing

# Steps for testing

-Install React Testing Library
-Install jest
-Install babel dependencies
-Configure the babel
-Configure Parcel Config file to disable default babel Transpilation
-Jest Configuration - npx jest --init
-Install JS dom testing library-npm install --save-dev jest-environment-jsdom
-Install @babel/preset-react to make JSX work in the test cases
--Include @babel/preset-react inside to my babel config
-Install @testing-library/jest-dom
