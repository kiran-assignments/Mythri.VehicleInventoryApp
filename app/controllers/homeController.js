/**
 * Created by aalap on 21-05-2015.
 */
app.controller('homeController',[
    '$scope',
    'menuFactory','$state',
    function($scope,menuFactory,$state){
        function init(){
            menuFactory.getMenuItems().then(function(data){
                $scope.menu = data.menu;
            });
        }

        $scope.navigate=function(route){
            $state.go(route);
        };

        $scope.user={
            name:"kiran"
        };
        init();
}]);