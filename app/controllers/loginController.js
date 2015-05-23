/**
 * Created by aalap on 22-05-2015.
 */
app.controller('loginController',['$scope','loginService','$state',
    function($scope,loginService,$state){
        $scope.user ={username:"",password:""};
        $scope.login = function(){
            loginService.login($scope.user).then(function(response){
                if(response.isAuthenticated){
                 $state.go('home');
                }
                else{
                    $scope.showErrorMessage="user is not Authenticated";
                }
            });

        }
    }]);