( function(){
	
	angular.module('data')
	.component('categoryList',{
		templateUrl : 'src/data/templates/categoryList.component.html',
		bindings : {
			categories : '<'
		}

	})
})();