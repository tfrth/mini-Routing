var app = angular.module('miniRouting', ['ngRoute']); //ngRoute injected into app

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'js/products/productTmpl.html',
      controller: 'productsCtrl'
    })
    .when('/settings', {
      templateUrl: 'js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });


});

