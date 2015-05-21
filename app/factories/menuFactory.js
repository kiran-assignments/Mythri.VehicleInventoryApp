/**
 * Created by aalap on 21-05-2015.
 */
app.factory('menuFactory',['$http','$q', function($http,$q){

    return{
       getMenuItems :function(){
           var dfd = $q.defer();
            $http.get('app/data/menu.json')
                .then(function(response,status){
                    if(response.status==200)
                    dfd.resolve(response.data);
                    else
                    dfd.reject(response);
            });
          return dfd.promise;
       }
    }
}]);