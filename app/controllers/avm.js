var avmApp = angular.module('avmApp', ['AvmModel', 'ngTouch']);


// Index: http://localhost/views/avm/index.html

avmApp.controller('IndexCtrl', function ($scope, AvmRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/avm/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/avm.js)
  AvmRestangular.all('avm').getList().then( function(avms) {
    $scope.avms = avms;
  });

  // Native navigation
  steroids.view.navigationBar.show("Avm index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/avm/show.html?id=<id>

avmApp.controller('ShowCtrl', function ($scope, $filter, AvmRestangular) {

  // Fetch all objects from the local JSON (see app/models/avm.js)
  AvmRestangular.all('avm').getList().then( function(avms) {
    // Then select the one based on the view's id query parameter
    $scope.avm = $filter('filter')(avms, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Avm: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
