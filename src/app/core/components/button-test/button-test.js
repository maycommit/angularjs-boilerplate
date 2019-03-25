import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buttonTestComponent from './buton-test.component';

let buttonTestModule = angular.module('button-test', [
  uiRouter
])

.component('button-test', buttonTestComponent)

.name;

export default buttonTestModule;
