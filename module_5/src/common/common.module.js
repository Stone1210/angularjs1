(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://calm-shore-43701.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
