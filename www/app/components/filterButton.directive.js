'use strict';

angular.module('avm.components')
	.directive("filterButton", function ($rootScope, $state) {
		return {
			restrict: 'E',
			scope: {
				state: '@',
				defaultFilter: '=',
				currentFilter: '='
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/filterButton.directive.html',
			controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
				$scope.newFilter = {};
				$scope.isOpen = false;

				$scope.filterSidebar = function () {
					if ($scope.isOpen) {
						$scope.reset();
					} else {
						$scope.open();
					}
					$scope.isOpen = !$scope.isOpen;
				};

				$scope.open = function () {
					angular.extend($scope.newFilter, $scope.currentFilter);
					$rootScope.toggle('filterSidebar', 'on');
				};

				$scope.reset = function () {
					$scope.newFilter = angular.copy($scope.defaultFilter);
					$scope.currentFilter = angular.copy($scope.newFilter);
					document.activeElement.blur();
					$rootScope.toggle('filterSidebar', 'off');
				};

				$scope.apply = function () {
					$scope.currentFilter = angular.copy($scope.newFilter);
					$rootScope.toggle('filterSidebar', 'off');
					document.activeElement.blur();
					$state.go($scope.state, $scope.currentFilter);
				};
			}]
		};
	});