'use strict';

angular.module('avm.components')
	.directive("drinkButtons", function ($ionicModal) {
		return {
			restrict: 'E',
			scope: {
				item: '='
			},
			replace: true,
			transclude: true,
			templateUrl: 'app/components/drinkButtons.directive.html',
			controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
				$scope.data = {
					rate: 2,
					comment: ''
				};

				$scope.isTried = function (item) {
					return item.tried;
				};
				$scope.toTry = function (item) {
					openModal();
					item.tried = !item.tried;
				};

				$scope.isSaved = function (item) {
					return item.saved;
				};
				$scope.toSave = function (item) {
					item.saved = !item.saved;
				};

				$scope.save = function () {
					closeModal();
				};

				$scope.cancel = function () {
					closeModal();
				};

				$ionicModal.fromTemplateUrl('app/components/tryDrink.modal.html', {
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