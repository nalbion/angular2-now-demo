/// <reference path="../../.tmp/declarations/angular2-now.d.ts" />
// Import the angular2-now decorators and functions into local scope
import {Component, View, bootstrap} from '../../bower_components/angular2-now/angular2-now';
//var {Component, Template, Service, Filter, Inject, bootstrap} = angular2now;
declare var angular;

import './main/test';

// Template, Service, Filter, Inject,


angular.module('app', []);

@Component({
  selector: 'app',
  name: 'App'
})
@View({
  template: `<content>Hello {{name}}</content>`
})
class App {
  name: string;

  constructor() {
    this.name = 'World';
  }
}

bootstrap(App);

// i18n: https://raw.githubusercontent.com/requirejs/i18n/latest/i18n.js
