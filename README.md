# TwitterScrapping

TwitterScrapping is a project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Installation
Clone the project from [Github](https://github.com/andela-gike/twitter-scrapping.git)
Run the following command with your node package manager to install all the neccessary packages
```bash
yarn install or npm install
```

## Available Scripts

In the project directory, you can run:

### `yarn start or npm start`
Runs the app in the development mode.<br />

**or Run**
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Architecture
The application was written in Angular. Since the challenge needed a lot of UI components I build most of the UI components from ground up without an external CSS library or package expect the pagination functionality. Although the time spent to complete the project was more as to compare when using a CSS package. For state management, I used Rxjs.

## Testing
In the application I implement unit testing and end-to-end testing to the different functionality of the application. I tested the