'use strict';

angular.module('avm.tabs.drinks')
	.controller('DrinksListCtrl', function ($rootScope, $scope, $state, $stateParams, utils, items, $timeout) {
		$scope.items = items;

		var sParams = angular.copy($stateParams);
		$scope.currentFilter = utils.cleanObject(sParams);
		console.log($scope.currentFilter);
		$scope.newFilter = angular.copy($scope.currentFilter);

		$scope.reset = function () {
			var params = _.mapValues($scope.currentFilter, function () {
				return null;
			});
			hideKeyboardAndCall (function () {
				$rootScope.toggle('filterSidebar', 'off');
				$state.go($state.current, params);
			});
		};

		$scope.apply = function () {
			$scope.currentFilter = angular.copy($scope.newFilter);

			hideKeyboardAndCall (function () {
				$rootScope.toggle('filterSidebar', 'off');
				$state.go($state.current.name, $scope.currentFilter, {reload: true});
			});
		};

		function hideKeyboardAndCall (callback) {
			document.activeElement.blur();
			$timeout(callback, 300);
		}

		function mapFilters (filter) {
			if (!filter.info) {
				filter.info = {};
			}
			if (filter.flavor) {
				filter.info.flavor = filter.flavor;
				delete filter.flavor;
			}
		}
	});
