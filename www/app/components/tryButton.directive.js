'use strict';

angular.module('avm.components')
	.directive("tryButton", function () {
		return {
			restrict: 'E',
			scope: {
				item: '='
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/ratingView.directive.html',
			controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
				$scope.max = _.max($scope.rate.ratings);
			}]
		};
	});