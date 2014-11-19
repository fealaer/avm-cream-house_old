'use strict';

angular.module('avm.tabs.ingredients')
	.service('ingredientsService', function ($q, $localStorage, $filter) {
		var self = this;
		var ingredients = angular.fromJson(localStorage.getItem('ingredients'));

		/**
		 * Retrieves all ingredients
		 * @returns {promise}
		 */
		self.getAll = function () {
			var deferred = $q.defer();
			deferred.resolve(ingredients);
			return deferred.promise;
		};

		/**
		 * Retrieves ingredient by id
		 * @returns {promise}
		 */
		self.getOne = function (id) {
			var deferred = $q.defer();
			deferred.resolve($filter('filter')(ingredients, {id: id})[0]);
			return deferred.promise;
		}
	});