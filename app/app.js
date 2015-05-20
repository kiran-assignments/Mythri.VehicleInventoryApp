var app = angular.module('vehicle.inventory', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
    urlRouterProvider) {
    urlRouterProvider.otherwise('/home');
    var home = {
        url: "/home",
        templateUrl: "app/templates/home.html"
    };
    var vehicleList = {
        url: "/vehiclelist",
        templateUrl: "app/templates/vehiclelist.html"
    };
    var register = {
        url: "/register",
        templateUrl: "app/templates/register.html"
    };
    var login = {
        url: "/login",
        templateUrl: "app/templates/login.html"
    };
    var reports = {
        url: "/reports",
        templateUrl: "app/templates/reports.html"
    };
    $stateProvider.state('home', home);
    $stateProvider.state('vehiclelist', vehicleList);
    $stateProvider.state('register', register);
    $stateProvider.state('login', login);
    $stateProvider.state('reports', reports);

   
}]);
