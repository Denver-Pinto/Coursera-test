(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'MenuService','menuItem','ApiPath'];
function MyInfoController(user,MenuService,menuItem,ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  // if($ctrl.user.completed){
  // 	$ctrl.menuItem = MenuService.getMenuItem($ctrl.user.short_name);
  // console.log($ctrl.menuItem);
  // }
  $ctrl.menuItem = menuItem;
  $ctrl.basePath = ApiPath;
}

})();