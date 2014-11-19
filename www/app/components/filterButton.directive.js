'use strict';

angular.module('avm.components')
	.directive("filterButton", function ($ionicModal) {
		return {
			restrict: 'E',
			scope: {
				modalTemplate: '@',
				defaultFilter: '=',
				currentFilter: '='
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/filterButton.directive.html',
			controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
				$scope.newFilter = {};
				$scope.open = function () {
					angular.extend($scope.newFilter, $scope.currentFilter);
					openModal();
				};

				$scope.reset = function () {
					$scope.newFilter = angular.copy($scope.defaultFilter);
					$scope.currentFilter = angular.copy($scope.newFilter);
				};

				$scope.apply = function () {
					closeModal();
					$scope.currentFilter = angular.copy($scope.newFilter);
				};

				$scope.cancel = function () {
					closeModal();
				};

				$ionicModal.fromTemplateUrl($scope.modalTemplate, {
					scope: $scope,
					animation: 'slide-in-up'
				}).then(function (modal) {
					$scope.modal = modal;

					//Cleanup the modal when we're done with it!
					$scope.$on('$destroy', function () {
						$scope.modal.remove();
					});
					// Execute action on hide modal
					$scope.$on('modal.hidden', function () {
						// Execute action
					});
					// Execute action on remove modal
					$scope.$on('modal.removed', function () {
						// Execute action
					});
				});
				function openModal () {
					$scope.modal.show();
				}
				function closeModal () {
					$scope.modal.hide();
				}
			}]
		};
	});