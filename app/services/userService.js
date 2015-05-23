/**
 * Created by aalap on 22-05-2015.
 */
app.service('userService',[function(){
    var user ={isAuthenticated:false,
               username:""}
    return {
        getUserDetails: function () {
            return user;
        },
        setUserDetails :function(user){
            user = user;
        }
    }


}]);