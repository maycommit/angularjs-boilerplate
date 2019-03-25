import angular from 'angular';
import Home from './home/home';

let componentModule = angular.module('app.modules', [
  Home,
])

.name;

export default componentModule;
