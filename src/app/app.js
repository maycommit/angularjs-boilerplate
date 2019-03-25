import angular from 'angular'
import uiRouter from 'angular-ui-router';
import Components from 'core/components'
import Modules from 'modules'
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  Components,
  Modules
])
.config(($locationProvider) => {
  "ngInject";
  $locationProvider.html5Mode(true).hashPrefix('!');
})
.component('app', AppComponent)
