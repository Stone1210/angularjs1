(function(){
'use strict'

angular.module('MenuApp')
.controller("CategoryController", CategoryController)

// CategoryController.$inject = ["MenuDataService"];
// function CategoryController(MenuDataService) {
//     var categoryList = this;
//
//     categoryList.$onInit = function(){
//         console.log("controller");
//         MenuDataService.getAllCategories()
//         .then(function(result) {
//             categoryList.categories = result;
//             console.log(categoryList.categories);
//         })
//     }
// }

CategoryController.$inject = ["categories"];
function CategoryController(categories) {
    var categoryList = this;
    categoryList.categories = categories;
}
})();
