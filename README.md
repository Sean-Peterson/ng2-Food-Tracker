# FoodTracker

Food Tracker is the result from an Epicodus solo project designed to test my ability to create a site using angular 2. Food Tracker gives users the ability to track their daily food intake.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

3/29/17

## Prerequisites

You will need the following properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Angular CLI](https://ember-cli.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Planning

  1. Configuration/dependencies
    * Bootstrap: package.json
    * All other other dependencies are installed by Angular2 and located in package.json

  2. Specs
    * Spec 1: User can create and save a food item
    * Spec 2: User can see a list of the foods that he/she has eaten and logged
    * Spec 3: User can see a list of foods that he/she has logged that shows foods above or below 500 cals
    * Spec 4: User can edit food entries

  3. Integration
    * Initial route with all dependencies in Controller
    * Template/html page for `app.component`
    * component page for `food-display`
    * component page for `new-food`
    * component page for `edit-food`
    * model for `food`
    * Pipe for `caloricTotal`
    * Display all foods on `food-display` component
    * Display update food form with `edit-food` component
    * Display new food form with `new-food` component

  4. UX/UI
    * Include and modify bootstrap
    * Develop custom style

  5. Polish
    * Refactor minor portion of app.component.html, food-display.component.html
    * Delete unused code
    * Make README awesome

## Technologies Used
  * **HTML**: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
  * **CSS**: The Cascading Style Sheets Specification is a computer language that is used to write formatting instructions.
  * **JavaScipt**: An object-oriented computer programming language commonly used to create interactive effects within web browsers.
  * **Angular2**: Angular2 is a JavaScript framework for creating web applications.
  * **npm**: A NodeJS package manager. You can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
