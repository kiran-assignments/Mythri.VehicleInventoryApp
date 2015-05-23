/**
 * Created by aalap on 22-05-2015.
 */

app.service('loginService',['$http','$q','userService',
    function($http,$q,userService){
        return {
            login :function(user){
                var dfd = $q.defer();
                $http.get('app/data/login.json')
                    .then(function(response){
                        var user ={isAuthenticated:false,username:""};
                        if(response.status==200){
                            logins =response.data;
                            angular.forEach(logins.users,function(login){
                                if(login.username===user.username
                                    && login.password===user.password){
                                        user.isAuthenticated =true;
                                        user.username =login.username;

                                }
                            });
                            userService.setUserDetails(user);

                            dfd.resolve(user);
                        }
                        else{
                            dfd.reject(response);
                        }
                    });
                return dfd.promise;
            }
        }

}]);