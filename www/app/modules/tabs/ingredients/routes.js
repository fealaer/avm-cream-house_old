'use strict';

angular.module('avm.tabs.ingredients')
	.config(function ($stateProvider) {
		$stateProvider
			.state('tabs.ingredients', {
				url: "/ingredients",
				views: {
					'ingredients@tabs': {
						templateUrl: "app/modules/tabs/ingredients/list.controller.html",
						controller: 'IngredientsListCtrl'
					}
				},
				resolve: {
					items: function (ingredientsService) {
						return ingredientsService.getAll();
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
				},
				resolve: {
					item: function ($stateParams, ingredientsService) {
						return ingredientsService.getOne($stateParams.id);
					}
				}
			});
	});