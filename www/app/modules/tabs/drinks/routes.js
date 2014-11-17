'use strict';

angular.module('avm.tabs.drinks')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.drinks', {
				url: "/drinks",
				views: {
					'drinks': {
						templateUrl: "app/modules/tabs/drinks/list.controller.html",
						controller: 'DrinksListCtrl'
					}
				},
				resolve: {
					items: function (AvmRestangular) {
						return AvmRestangular.all('drinks').getList();
					}
				}
			})
			.state('tabs.drinks.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'drinks@tabs': {
						templateUrl: "app/modules/tabs/drinks/item.controller.html",
						controller: 'DrinksItemCtrl'
					}
				}
			});
	});