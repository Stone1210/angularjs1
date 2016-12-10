(function(){
'use strict'

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var ToBuy = this;

    ToBuy.empty = false;
    ToBuy.BoughtEmpty = true;
    ToBuy.items = ShoppingListCheckOffService.getToBuyItems();
    ToBuy.buy = function(itemIndex){
        ShoppingListCheckOffService.addToBoughtList(itemIndex);
        if (!ShoppingListCheckOffService.isBoughtEmpty())
            ToBuy.BoughtEmpty = false;
        if (ToBuy.items.length===0)
            ToBuy.empty = true;
    };
}

AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService']
function AlreadyBoughtController($scope,ShoppingListCheckOffService) {
    var Bought = this;
    // Bought.empty = true;
    // Bought.getitems = function (){
    //     Bought.empty = ShoppingListCheckOffService.isBoughtEmpty();
    //     return ShoppingListCheckOffService.getBoughtItems();
    // }
    Bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;
    function Item(name, quanity) {
        this.name = name;
        this.quanity = quanity;
    }
    var ToBuyItems = [new Item("cookie",3),new Item("coke",5),new Item("coffee",10),new Item("banana",100),new Item("pocky", 12)];

    var BoughtItems =[];

    service.addToBoughtList = function (itemIdx) {
        BoughtItems.push(ToBuyItems.splice(itemIdx,1)[0]);
    };

    service.isBoughtEmpty = function() {
        return (BoughtItems.length===0)
    }

    service.getToBuyItems = function () {
        return ToBuyItems;
    };

    service.getBoughtItems = function () {
        return BoughtItems;
    };

}
})()
