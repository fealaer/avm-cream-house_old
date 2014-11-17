'use strict';

angular.module('avm.tabs.ingredients')
	.controller('IngredientsListCtrl', function ($scope, items) {
		$scope.items = items;
	});
