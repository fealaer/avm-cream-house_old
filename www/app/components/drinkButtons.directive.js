'use strict';

angular.module('avm.components')
	.directive("drinkButtons", function ($rootScope) {
		return {
			restrict: 'E',
			scope: {
				item: '=',
				target: '@'
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/drinkButtons.directive.html',
			controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
				$scope.data = {
					rate: 2,
					comment: ''
				};

				$scope.isTried = function () {
					return $scope.item.tried;
				};
				$scope.toTry = function () {
					$scope.item.tried = !$scope.item.tried;
				};

				$scope.isSaved = function () {
					return $scope.item.saved;
				};
				$scope.toSave = function () {
					$scope.item.saved = !$scope.item.saved;
				};

				$scope.save = function () {
					$rootScope.toggle('drinkButtonModal.' + $scope.item.id, 'off');
				};
			}]
		};
	});