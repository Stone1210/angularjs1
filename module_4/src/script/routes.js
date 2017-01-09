(function(){
'use strict'

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function RoutesConfig($stateProvider,$urlRouterProvider) {
    //redirect to home page  if no other urls matched.
    $urlRouterProvider.otherwise("/");

    //set up stateProvieder
    $stateProvider
    //home
        .state("home", {
            url: "/",
            templateUrl: "src/template/home.template.html"
        })

    //category
        .state('category', {
            url: "/categories",
            templateUrl: "src/template/main-categories.template.html",
            controller: "CategoryController as categoryList",
            resolve: {
                categories: ["MenuDataService", function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })

    //items
        .state('item', {
            url: "/items?{category}",
            templateUrl: "src/template/main-items.template.html",
            controller: "ItemsController as itemList",
            resolve: {
                items: ["MenuDataService", "$stateParams",
                    function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                }],
                category: ["$stateParams", function($stateParams) {
                    // console.log($stateParams.category)
                    return $stateParams.category;
                }]
            }
        });
}
})();
