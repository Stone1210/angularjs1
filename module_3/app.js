(function(){
'use strict'

angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", foundItemsDirective)
.constant("ApiBaseUrl", "https://davids-restaurant.herokuapp.com");

function foundItemsDirective() {
    var ddo = {
        templateUrl: 'items.html',
        scope: {
            items: '<',
            onRemove: '&'
        }
    };
    return ddo;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowItems = this;
    narrowItems.found =[];
    narrowItems.showMessage= false;

    narrowItems.getNarrowedItems = function (){
        narrowItems.found =[];
        if (narrowItems.searchTerm){
            var promise = MenuSearchService.getMatchedMenuItems(narrowItems.searchTerm);
            promise.then(function(response) {
                narrowItems.found = response;

                if (narrowItems.searchTerm.length==0 || narrowItems.found.length==0) {
                    narrowItems.showMessage = true;
                }
            })
            .catch(function (error){
                console.log("Something is wrong in the getNarrowedItems of NarrowItDownController")
            })
        }
    };

    narrowItems.removeNarrowedItems = function (itemIdx){
        narrowItems.found.splice(itemIdx,1);
    };

}

MenuSearchService.$inject=['$http','ApiBaseUrl']
function MenuSearchService($http, ApiBaseUrl) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
            url: (ApiBaseUrl+ "/menu_items.json")
        }).then(function(result){
            var foundItems =[];
            var items = result.data.menu_items;
            for (var i=0; i<items.length; i++){
                if (searchTerm!= '' && items[i].description.indexOf(searchTerm)!= -1)
                    foundItems.push(items[i]);
            }
            //
            // for (var i=0; i<foundItems.length; i++)
            //     console.log(foundItems[i]);
            return foundItems;
        })
    };

}
})()
