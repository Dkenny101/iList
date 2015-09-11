'use strict';

app.controller('ListCtrl', function ($scope, List) {
    $scope.listItem = {name: '', price: ''}; //post 
    $scope.list = List.all; //posts
    
    //method on the scope that allows an item to be
    //pushed into the array
    
    $scope.submitListItem = function () {
        List.create($scope.listItem).then(function() {
            $scope.listItem = {name: '', price: ''};
        });
    };
    
    //method to delete an item by using its index in the array
    
    $scope.deleteItem = function (listItem) {
        List.delete(listItem);
        };
});