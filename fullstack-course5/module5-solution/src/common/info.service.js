(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


function InfoService() {
  var service = this;
  service.user = {firstname : "", lastname : "", email : "" , phone : "" ,completed: false , short_name : ""};
  service.getDetails = function () {
    return service.user;
  };


  service.setDetails = function (user) {
    //console.log(user);
    service.user.firstname = user.firstname;
    service.user.lastname = user.lastname;
    service.user.email = user.email;
    service.user.phone = user.phone;
    service.user.short_name = user.short_name;
    service.user.completed = user.completed;
  };

  service.getShortName = function(){
    return service.user.short_name;
  }

}



})();
