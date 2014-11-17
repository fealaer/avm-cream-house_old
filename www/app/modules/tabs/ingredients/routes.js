'use strict';

angular.module('avm.tabs.ingredients')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.ingredients', {
				url: "/ingredients",
				views: {
					'ingredients': {
						templateUrl: "app/modules/tabs/ingredients/list.controller.html",
						controller: 'IngredientsListCtrl'
					}
				},
				resolve: {
					items: function (AvmRestangular) {
						return AvmRestangular.all('ingredients').getList();
					}
				}
			})
			.state('tabs.ingredients.item', {
				url: '/{id:[a-z_]+}',
				views: {
					'ingredients@tabs': {
						templateUrl: "app/modules/tabs/ingredients/item.controller.html",
						controller: 'IngredientsItemCtrl'
					}
				}
			});
	});