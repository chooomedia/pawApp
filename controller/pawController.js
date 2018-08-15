var app = angular.module('pawApp',['ngMaterial', 'ngMessages']);

app.controller('pawController', ['$scope', function($scope) {
    $scope.title= "the Paw Site";
}]);