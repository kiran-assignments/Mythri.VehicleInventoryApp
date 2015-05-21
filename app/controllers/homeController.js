/**
 * Created by aalap on 21-05-2015.
 */
app.controller('homeController',[
    '$scope',
    'menuFactory',
    function($scope,menuFactory){
        function init(){
            menuFactory.getMenuItems().then(function(data){
                $scope.menu = data.menu;
            });
        }
        init();
}]);