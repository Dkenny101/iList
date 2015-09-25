'use strict';

app.factory('Auth', function($firebaseAuth, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL);
    
    return $firebaseAuth(ref);
});



//app.factory('Auth', function ($firebaseAuth, FIREBASE_URL, $rootScope) {
//    //$rootScope is similar to $scope but is global
//    var ref = new Firebase(FIREBASE_URL);
//    var auth = $firebaseSimpleLogin(ref);
//    
//    var Auth ={
//        register: function (user) {
//            return auth.$createUser(user.email, user.password);
//        },
//        login: function (user) {
//            return auth.$login('password', user);
//        },
//        logout: function() {
//            auth.$logout();
//        },
//        resolveUser: function() {
//            return auth.$getCurrentUser();
//        },
//        signedIn: function() {
//            return !!Auth.user.provider;
//        },
//        user: {}
//    };
//    
//    $rootScope.$on('$firebaseAuth:login', function(e, user) {
//        console.log('Logged in');
//        angular.copy(user, Auth.user);
//    });
//    $rootScope.$on('$firebaseAuth:logout', function() {
//        console.log('logged out');
//        angular.copy({}, Auth.user);
//    });
//    
//    return Auth;
//});