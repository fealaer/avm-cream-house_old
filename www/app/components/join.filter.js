'use strict';

angular.module('avm.components')
	.filter('join', function () {
		return function (array, splitter) {
			if (array && splitter) {
				return array.join(splitter);
			} else {
				return '';
			}
		};
	});