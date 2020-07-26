
(function () {
'use strict';

angular.module('narrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl : 'foundItems.html',
    scope :{
      list: '<myList',
      dirRemove : '&onRemove'
    }
  };

  return ddo;
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];

function MenuSearchService( $http, ApiBasePath)
{
  var service = this;
  service.getMatchedMenuItems = function( searchTerm)
  {
    // retrieve menu items using http service
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      // process result and only keep items that match
      var items =[];
      //console.log(result.data.menu_items);
      //console.log(" Length=" +result.data.menu_items.length);
      for(let i =0; i < result.data.menu_items.length; i++)
      {
        var dscription =result.data.menu_items[i].description;
        typeof(dscription);
        if ( dscription.indexOf(searchTerm)!= -1){
          items.push(result.data.menu_items[i]);
          //console.log(result.data.menu_items[i].description);
          //console.log( result.data.menu_items[i].description.indexOf(searchTerm));
        }
        
      }
      //console.log(items);

      // return processed items
      return items;
    });
  }

  service.removeItem = function (itemIndex) {
    //
  };
}

 NarrowItDownController.$inject =['MenuSearchService'];

 function NarrowItDownController( MenuSearchService)
 {
  var ctrl = this;

  ctrl.searchTerm ="veal";
  ctrl.found = "";
  ctrl.fetch = function()
  {
    ctrl.errorMsg ="";
    if(ctrl.searchTerm != "")
    {
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(response){
      ctrl.found = response;
      if( ctrl.found.length == 0)
      {
        ctrl.found ="";
        ctrl.errorMsg = "Nothing Found!"
        //console.log(ctrl.errorMsg);
      }
      //console.log(ctrl.found);

    });
    }
    else {
      ctrl.found ="";
      ctrl.errorMsg = "Nothing Found!"
      //console.log(ctrl.errorMsg);
    }
    
    

  }

  ctrl.removeItem = function( index){
    
     ctrl.found.splice(index, 1);
  }

 }

})();