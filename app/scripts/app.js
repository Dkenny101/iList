'use strict';
/* global app:true */
/* exported app */
/**
 * @ngdoc overview
 * @name shoppingListApp
 * @description
 * # shoppingListApp
 *
 * Main module of the application.
 */
var app = angular
  .module('shoppingListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/lists.html',
        controller: 'ListCtrl'
      })
    .when('/showlist/:listId',{
        templateUrl: 'views/showlist.html',
        controller: 'listViewCtrl'   
      })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
            user: function(Auth) {
                return Auth.resolveUser();
            }
        }
    })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://shopping-li.firebaseIO.com/');