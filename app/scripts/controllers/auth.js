'use strict';

app.controller('AuthCtrl', function($scope, Auth) {
    $scope.createUser = function() {
        $scope.message = null;
        $scope.error = null;
        
        Auth.$createUser({
            email: $scope.email,
            password: $scope.password
        }).then(function(userdata) {
            $scope.message = "User created with uid: " + userdata.uid;
        }).catch(function(error) {
            $scope.error = error;
        });
    };
    
    $scope.removeUser = function() {
        $scope.message = null;
        $scope.error = null;
        
        Auth.$removeUser({
            email: $scope.email,
            password: $scope.password
        }).then(function() {
            $scope.message = "User Removed";
        }).catch(function(error) {
            $scope.error = error;   
        });
    };
});



//app.controller('AuthCtrl', function($scope, $location, Auth, user) {
//    if(user){
//        $location.path('/');
//    }
//    
//    $scope.register = function () {
//        Auth.register($scope.user).then(function () {
//            return Auth.login($scope.user).then(function() {
//                $location.path('/');
//            });
//        });
//    };
//});