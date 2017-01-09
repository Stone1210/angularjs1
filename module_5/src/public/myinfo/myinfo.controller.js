(function() {
'use strict'

angular.module('public')
.controller('InfoController', InfoController)

InfoController.$inject = ['myinfo'];
function InfoController(myinfo) {
    var info = this;

    info.myinfo = myinfo;
    info.showError = angular.equals({}, info.myinfo);

}

})();
