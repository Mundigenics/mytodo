'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    // Mine: added to make the todos Objects instead of strings.
    var todo = {
        title: "",
        state: 1
    };

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
        localStorageService.set('todos', $scope.todos);
    }, true);
    
    // Mine: added to build a history
    var completedTodosInStore = localStorageService.get('completedTodos');
    
    // Mine: added to list the historic tasks
    $scope.completedTodos = completedTodosInStore || [];
    
    // Mine: added to update the Local Storage
    $scope.$watch('completedTodos', function () {
        localStorageService.set('completedTodos', $scope.completedTodos);
    }, true);
  
    // Tutorial: Pushes tasks from the input box to the To Do list.
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    // Tutorial: Removes tasks from the To Do list. 
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
    // Mine: Moves completed tasks to the Completed Tasks List. 
    $scope.completedTodo = function () {

        $scope.completedTodos.push($scope.todos[index]);
        // $scope.todos.splice(index);
        };
    
    // Mine: only in place to clear down the Completed list. May be used to empty daily tasks. 
    $scope.emptyCompletedTodos = function () {
        $scope.completedTodos = [];
    };
  });
