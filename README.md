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
