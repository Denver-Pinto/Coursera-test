( function(){
	
	angular.module('data')
	.component('itemList',{
		templateUrl : 'src/data/templates/itemList.component.html',
		bindings : {
			items : '<'
		}
	})
})();