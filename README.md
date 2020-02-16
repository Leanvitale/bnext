# CodeBnext

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Información sobre rutas

Lista de rutas a probar:
`http://localhost:4200/{1 o 2}` -> Obtienes la información del Usuario para modificar
Cualquier otro valor que ingrese lo va a enviar a la pagina de Usuario no Existente `http://localhost:4200/no-user`.
En caso de que la modificación sea exitosa, se redirecciona al la ruta `http://localhost:4200/gracias`.
Si en el proceso de modificación surge algun error, se redirecciona a la ruta `http://localhost:4200/error`

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
