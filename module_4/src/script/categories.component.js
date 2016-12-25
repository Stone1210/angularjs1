(function() {
'use strict'

angular.module("MenuApp")
.component("categoriesComponent",{
    templateUrl: "src/template/categories.template.html",
    bindings: {
        data : '<'
    }
});

})();
