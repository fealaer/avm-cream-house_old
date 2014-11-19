'use strict';

angular.module('avm.tabs.drinks')
	.service('drinksService', function ($q, $localStorage, $filter) {
		var self = this;
		var drinks = angular.fromJson(localStorage.getItem('drinks'));

		/**
		 * Retrieves all drinks
		 * @returns {promise}
		 */
		self.getAll = function () {
			var deferred = $q.defer();
			deferred.resolve(drinks);
			return deferred.promise;
		};

		/**
		 * Retrieves drink by id
		 * @returns {promise}
		 */
		self.getOne = function (id) {
			var deferred = $q.defer();
			deferred.resolve($filter('filter')(drinks, {id: id})[0]);
			return deferred.promise;
		}
	});