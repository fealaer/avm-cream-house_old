'use strict';

angular.module('avm.tabs')
	.controller('TabsCtrl', function ($rootScope, $scope, $state, $filter) {
		$scope.last = {
			'tabs.drinks': {
				state: 'tabs.drinks',
				stateParams: {}
			},
			'tabs.ingredients': {
				state: 'tabs.ingredients',
				stateParams: {}
			}
		};

		$scope.prev = {
			'tabs.drinks': {
				state: 'tabs.drinks',
				stateParams: {}
			},
			'tabs.ingredients': {
				state: 'tabs.ingredients',
				stateParams: {}
			}
		};

		$rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
			function saveState(state, params, storage, strict) {
				if (!strict ||
					(strict && (state.name === 'tabs.drinks' || state.name === 'tabs.ingredients'))) {
					var root = ~state.name.indexOf('tabs.drinks') ? 'tabs.drinks' : 'tabs.ingredients';
					storage[root] = {
						state: state.name,
						stateParams: params
					};
				}
			}
			saveState(to, toParams, $scope.last, false);
			saveState(from, fromParams, $scope.prev, true);
		});

		$scope.selectState = function (rootStateName) {
			if ($filter('includedByState')(rootStateName)) {
				var prev = $scope.prev[rootStateName];
				$state.go(prev.state, prev.stateParams);
			} else {
				var last = $scope.last[rootStateName];
				$state.go(last.state, last.stateParams);
			}
		};

		$scope.isActive = function (rootStateName) {
			var res = $filter('includedByState')(rootStateName);
			console.log('isActive', $state.current.name, rootStateName, res);
			return  res;
		};
	});
