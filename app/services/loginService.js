/**
 * Created by aalap on 22-05-2015.
 */

app.service('loginService',['$http','$q',
    function($http,$q){
        return {
            login :function(user){
                var dfd = $q.defer();
                $http.get('app/data/login.json')
                    .then(function(response){
                        var authenticatedUser ={isAuthenticated:false,user:""};
                        if(response.status==200){
                            logins =response.data;
                            angular.forEach(logins.users,function(login){
                                if(login.username===user.username
                                    && login.password===user.password){
                                    authenticatedUser.isAuthenticated=true;
                                    authenticatedUser.user=user.username
                                    dfd.resolve(authenticatedUser);
                                }
                            })
                        }
                        else{
                            dfd.reject(response);
                        }
                    });
                return dfd.promise;
            }
        }

}]);