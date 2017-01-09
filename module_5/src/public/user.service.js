(function (){
'use strict'

angular.module('public')
.service('UserService', UserService);

UserService.$inject = ['ApiPath', '$http']
function UserService(ApiPath, $http) {
    var service = this;
    service.user = {};

    // service.storeUserInfo = function(user) {
    //     return $http({
    //         url: (ApiPath+'/menu_items/'+user.favorite+'.json')
    //     }).then(function(response) {
    //         service.user = user;
    //         console.log(service.user);
    //     })
    // };

    service.storeUserInfo = function(user) {
        service.user = user;
        // console.log(service.user);
    };

    service.checkMenuNumber = function(menu) {
        return $http({
            url: ((ApiPath+'/menu_items/'+menu+'.json'))
        }).then(function(response) {
            service.data = response;
            return service.data;
            // console.log(response);
        })
    };

    service.getUserInfo = function() {
        return service.user;
    };

}

})();
