'use strict';

angular.module('avm.tabs.drinks')
	.controller('DrinksItemCtrl', function ($scope, items, $filter, $stateParams, $ionicModal) {
		$scope.item = $filter('filter')(items, {id: $stateParams.id})[0];

		$scope.rate = 2;

		$scope.isTried = function (item) {
			return item.tried;
		};
		$scope.toTry = function (item) {
			$scope.openModal();
			item.tried = !item.tried;
		};

		$scope.isSaved = function (item) {
			return item.saved;
		};
		$scope.toSave = function (item) {
			item.saved = !item.saved;
		};

		$ionicModal.fromTemplateUrl('app/components/try.modal.html', {
			scope: $scope,
			animation: 'slide-in-up',
			focusFirstInput: true
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
		$scope.openModal = function () {
			$scope.modal.show();
		};
		$scope.closeModal = function () {
			$scope.modal.hide();
		};
	});
