( function(){
	angular.module('data')
	.service('MenuDataService',MenuDataService);
    
    MenuDataService.$inject =['$http'];

	function MenuDataService ($http) {

		var service = this;
		var categories =[];
		service.getAllCategories = function(){
			 var response = $http( {
				method : 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function(response){
				
				return response.data;

			})
			
			return response;
		};

		service.getItemsForCategory = function (categoryShortName) {
			var response = $http({
               method: "GET",
               url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
              
            }).then( function(response){
      
            	return response.data.menu_items;
            });
            return response;
		};

	}



})();