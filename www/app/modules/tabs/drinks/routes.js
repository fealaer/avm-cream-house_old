'use strict';

angular.module('avm.tabs.drinks')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.drinks', {
				url: '/drinks?ordering&name&saved&tasted&info_flavor',
				views: {
					'drinks@tabs': {
						templateUrl: 'app/modules/tabs/drinks/list.controller.html',
						controller: 'DrinksListCtrl'
					},
					'filterSidebar@tabs': {
						templateUrl: 'app/components/drinksFilter.modal.html',
						controller: 'DrinksListCtrl'
					}
				},
				resolve: {
					items: function (drinksService) {
						return drinksService.getAll();
					}
				}
			})
			.state('tabs.drinks.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'drinks@tabs': {
						templateUrl: 'app/modules/tabs/drinks/item.controller.html',
						controller: 'DrinksItemCtrl'
					}
				},
				resolve: {
					item: function ($stateParams, drinksService) {
						return drinksService.getOne($stateParams.id);
					}
				}
			});
	});