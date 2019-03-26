import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buttonTestComponent from './buton-test.component';

let buttonTestModule = angular.module('buttonTest', [
  uiRouter
])

.component('buttonTest', buttonTestComponent)

.name;

export default buttonTestModule;
