(function (){
'use strict';

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService'];
function RegisterController(UserService) {
    var reg = this;

    reg.showError = false;
    reg.showSuccess = false;

    // reg.submit = function() {
    //
    //     var promise = UserService.storeUserInfo(reg.user);
    //     promise.then(function(response) {
    //         reg.showSuccess = true;
    //         console.log('information has been saved.');
    //     })
    //     .catch(function(error) {
    //         reg.showError = true;
    //         console.log('No such menu number exists.');
    //     })
    // };

    reg.submit = function(){
        UserService.storeUserInfo(reg.user);
        reg.showSuccess = true;
    };

    reg.check = function() {
        var promise = UserService.checkMenuNumber(reg.user.favorite);
        promise.then(function(response) {
            reg.showError = false
            // console.log("valid input")

        })
        .catch(function(error) {
            reg.showError = true;
            // console.log("No such menu number exists.");
        })

    }

    reg.button = function() {
        reg.test =  UserService.getUserInfo();
        console.log(reg.test);
    };
}

})();
