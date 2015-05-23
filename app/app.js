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
        var about = {
            url: "/about",
            templateUrl: "app/templates/about.html"

        };
        var vehicles = {
            url: "/vehicles",
            templateUrl: "app/templates/vehicles.html"
        };
        var addVehicle = {
            url: "/addVehicle",
            templateUrl: "app/templates/addvehicle.html"
        };
        var login ={
            url: "/login",
            templateUrl: "app/templates/login.html",
            controller:"loginController"
        };
        var register ={
            url: "/register",
            templateUrl: "app/templates/register.html"
        };
    $stateProvider.state('home', home);
        $stateProvider.state('home.about', about);
        $stateProvider.state('home.vehicles',vehicles);
        $stateProvider.state('home.addVehicle',addVehicle);
        $stateProvider.state('home.login',login);
        $stateProvider.state('home.register',register);
}]);

app.run(['$rootScope','userService','$state',function($rootScope,userService,$state){
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
      /*  var userDetails = userService.getUserDetails();

        if(!userDetails.isAuthenticated){


        }*/
    });
    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        /*  var userDetails = userService.getUserDetails();

         if(!userDetails.isAuthenticated){


         }*/
    });
}]);
