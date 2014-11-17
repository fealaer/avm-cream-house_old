'use strict';

angular.module('avm.components', ['restangular'])
	.factory('AvmRestangular', function (Restangular) {

		return Restangular.withConfig(function (RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/data');
			RestangularConfigurer.setRequestSuffix('.json');
			RestangularConfigurer.setRestangularFields({
				id: "avm_id"
			});
		});

	});