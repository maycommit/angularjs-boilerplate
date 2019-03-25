import angular from 'angular';
import ButtonTest from './button-test/button-test'

let componentModule = angular.module('app.components', [
  ButtonTest
])
.name;

export default componentModule
