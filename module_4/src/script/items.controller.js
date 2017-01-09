(function(){
'use strict'

angular.module("MenuApp")
.controller("ItemsController", ItemsController)

ItemsController.$inject= ["items","category"];
function ItemsController(items, category) {
    var itemList = this;
    itemList.items = items;
    itemList.category = category;

    console.log(itemList);
}
})();
