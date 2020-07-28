(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to / if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/data/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/data/templates/main-categories.template.html',
      controller: 'CategoriesController as catctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
       }]
      }

    })
    .state('items',{
      url :'/items/{shortname}',
      templateUrl: 'src/data/templates/main-items.template.html',
      controller : 'ItemsController as itmctrl',
      resolve : {
        items : [ 'MenuDataService','$stateParams', function(MenuDataService, $stateParams){
          return MenuDataService.getItemsForCategory($stateParams.shortname);
        }]
      }

    });
}
})();