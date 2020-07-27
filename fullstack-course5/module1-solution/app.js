(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject =['$scope'];

function LunchCheckController($scope) {
  $scope.lunchitems = "";
  $scope.message =" ";
  $scope.generateMessage = function () {
  	if($scope.lunchitems ==""){
  		$scope.message = "Please enter data first";

  	}
  	else{
  		var luncharray = $scope.lunchitems.split(",");
  		//console.log(luncharray.length);
  		//console.log(luncharray);
  		
  		if (luncharray.length<=3){
  			$scope.message = "Enjoy!";

  		}
  		else{
  			$scope.message = "Too much!";
  		}
		

  	}
  }
}

})();
