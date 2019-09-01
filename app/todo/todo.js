'use strict';

angular.module('myApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/todo.html',
    controller: 'TodoCtrl'
  });
}])

.controller('TodoCtrl', function($scope) {
  $scope.tempInput = "";
  $scope.tasksArray = [];
  $scope.addItem = function(){
    if ($scope.tempInput){
        $scope.tasksArray.push($scope.tempInput);
        $scope.tempInput = "";
      } else {
        alert("Введи хоть что-то");
    }
  };

  $scope.deleteItem = function (item) {
    var index = $scope.tasksArray.indexOf(item);
    $scope.tasksArray.splice(item, 1);
  };

});
