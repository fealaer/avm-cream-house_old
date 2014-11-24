'use strict';

angular.module('avm', [
	'avm.components',
	'avm.modules'
])

	.config(function ($settings,
                    $logProvider,
                    $locationProvider,
                    $urlRouterProvider,
//                    localeProvider,
                    RestangularProvider,
                    $stateProvider) {

		// Configure logging
		$logProvider.debugEnabled($settings.debug);

		// Configure localization
//		localeProvider.setLocalesBasePath('/app/locales');

		// Configure Restangular
		(function () {
			RestangularProvider.setBaseUrl($settings.apiURL);
			RestangularProvider.setRequestSuffix('/');
			RestangularProvider.setDefaultHttpFields({
				cache: !$settings.debug
			});
			RestangularProvider.setDefaultHeaders({
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest'
			});
			RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
				if (operation === 'remove' || (operation === 'put' && angular.equals(element, {id: undefined}))) {
					// Send a delete WITHOUT a body.
					element = null;
				} else if (headers['Content-Type'] && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
					// Convert json request to x-www-form-urlencoded request
					element = $.param(element);
				}

				return {
					headers: headers,
					element: element,
					params: params,
					httpConfig: httpConfig
				};
			});
		})();

		// Configure routes
//		$locationProvider
//			.html5Mode(true)
//			.hashPrefix('!');

		// Configure home state
		// todo - something wrong with url: '/'
//		$stateProvider
//			.state('index', {
//				url: '/',
//				controller: function ($scope, $state) {
//					console.log('test');
//					$state.go('tabs.drinks');
//				}
//			});

		// Configure default router
		// todo - something wrong with url: '/'
		$urlRouterProvider.otherwise('/tabs/drinks');
	})

	// Configure ionic loading
//	.constant('$ionicLoadingConfig', {
//		noBackdrop: true,
//		animation: 'fade-in',
//		delay: 200,
//		template: '<div class="loading-box"><i class="positive icon ion-loading-c"></i></div>'
//	})

	.run(function ($rootScope,
                 $settings,
                 $log,
                 $interval,
                 $cacheFactory,
                 $location,
                 $window,
                 CaptureService
//		,$ionicLoading
		) {

		// Make $settings global
		$rootScope.$settings = $settings;

		// Log app info
		$log.info('AVM ' + $settings.version +
			'; Debug: ' + $settings.debug +
			'; Build Date: ' + $settings.buildDate);

		// Clear $http cache every 10 sec.
		$interval(function () {
			$cacheFactory.get('$http').removeAll();
		}, 10000, 0, false);

		// Google analytics users activity tracking
		$rootScope.$on('$stateChangeSuccess', function (event, data) {
			if (_.isFunction($window.ga) && data.name.indexOf('manager.') === -1) {
				$window.ga('send', 'pageview', { page: $location.path() });
			}
		});

		$rootScope.$on('$stateChangeStart', function() {
			CaptureService.resetAll();
		});

		// Show loading on state changes
//		(function () {
//			$rootScope.$on('$stateChangeStart', function () {
//				$ionicLoading.hide();
//				$ionicLoading.show();
//			});
//			$rootScope.$on('$stateChangeSuccess', function () {
//				// Defer removing block-ui till other scripts finished.
//				$rootScope.$evalAsync(function () {
//					$ionicLoading.hide();
//				});
//			});
//			$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//				$ionicLoading.hide();
//				$log.error(error.message);
//			});
//			$rootScope.$on('$stateNotFound', function () {
//				$ionicLoading.hide();
//			});
//			$rootScope.$on('$serverError', function () {
//				$ionicLoading.hide();
//			});
//		})();
	});


//	// Init intercom
//	.run(function (intercom) {
//		intercom.init();
//	});

// Set lang
//	.run(function ($acceptLanguage) {
//		var currentLang = {};

//		$acceptLanguage.$init();
//		currentLang = $acceptLanguage.$get();
//		Restangular.addFullRequestInterceptor(acceptLanguageRequestInterceptor);
//
//		if (currentLang && currentLang.language) {
//			locale.setLocale(currentLang.language);
//		} else {
//			locale.setLocale($settings.defaultLocale);
//		}
//	});
