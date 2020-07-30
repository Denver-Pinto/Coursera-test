(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['user', 'InfoService'];
function SignUpController(user,InfoService) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.submit = function(){
  	$ctrl.user.completed = true;
  	InfoService.setDetails($ctrl.user);


  }
}

})();