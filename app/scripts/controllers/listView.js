'use strict';
//we need to load a specific 
app.controller('listViewCtrl', function($scope, $routeParams, List){
    $scope.list = List.get($routeParams.listId);
});