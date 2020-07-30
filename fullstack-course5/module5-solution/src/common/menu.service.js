(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

    service.getMenuItem= function (short_name) {

    return $http({
      method : "GET",
      url : (ApiPath + '/menu_items/' + short_name + '.json'),
    }).then(function (response) {
      response.data.error = false;
     //console.log(response);
     //console.log(response.data.error);
      return response.data;
    },function(error){
      error.error = true;
      //console.log(error);
      //console.log(error.error);
      return error;
    });
  };

}



})();
