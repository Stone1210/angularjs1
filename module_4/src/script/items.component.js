(function() {
'use strict'

angular.module("MenuApp")
.component("itemsComponent", {
    templateUrl: "src/template/items.template.html",
    bindings: {
        items: '<',
        category: '<'
    }
});
})();
