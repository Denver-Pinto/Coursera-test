
(function () {
'use strict';

angular.module('shoppingListCheckOut', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);



ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemsBought = ShoppingListService.getItemsBought();

}




ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;
  showList.itemName = "";
  showList.itemQuantity = "";
  showList.itemsToBeBought = ShoppingListService.getItemsToBeBought();
  

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
   

  };
  showList.addItem = function () {
    ShoppingListService.addItem(showList.itemName, showList.itemQuantity);
  }
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var itemsToBeBought = [{
      name: "Cookies",
      quantity: 10
    },
    {
      name: "More Cookies",
      quantity: 10
    },
    {

      name: "Even More Cookies",
      quantity: 20
    },
    {
      name: "Pepto Bismol",
      quantity: 20
    },
    {
      name: "FrenchFries",
      quantity: 100
    }
    ];

    var itemsBought  = [];


  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBeBought.push(item);
    
  };

  service.removeItem = function (itemIndex) {
     var item = itemsToBeBought[itemIndex];
    itemsBought.push(item);

    itemsToBeBought.splice(itemIndex, 1);
  };

  service.getItemsToBeBought = function () {
    return itemsToBeBought;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

  /*service.getItemsToBeBoughtCount = function () {
    return itemsToBeBoughtCount;
  }
  service.getItemsBoughtCount = function () {
    return itemsBoughtCount;
  }*/
}

})();