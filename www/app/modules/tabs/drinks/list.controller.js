'use strict';

angular.module('avm.tabs.drinks')
	.controller('DrinksListCtrl', function ($scope, items) {
		$scope.items = items;
	});
