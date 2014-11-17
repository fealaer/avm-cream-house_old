'use strict';

angular.module('avm.tabs.ingredients')
	.controller('IngredientsItemCtrl', function ($scope, items, $filter, $stateParams) {
		$scope.item = $filter('filter')(items, {id: $stateParams.id})[0];
	});
