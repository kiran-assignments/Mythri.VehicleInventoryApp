var app = angular.module('vehicle.inventory',
    ['ui.router']);

app.config(['$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider,
    urlRouterProvider) {
    urlRouterProvider.otherwise('/home');
    var home = {
        url: "/home",
        templateUrl: "app/templates/home.html",
        controller:'homeController'
    };
    $stateProvider.state('home', home);

}]);
