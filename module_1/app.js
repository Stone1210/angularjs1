(function (){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.text = "";
        $scope.items = "";
        $scope.style = "";

        $scope.checkTooMuch = function (){
            var len = 0;
            var items = $scope.items.split(',');
            for (var i=0; i<items.length; i++) {
                if (items[i].trim()!=='')
                    len ++;
            };
            if (len>3) {
                $scope.style = "color:green; border:solid 2.5px green";
                $scope.text = "Too Much";
            }
            else if (len>0) {
                $scope.style = "color:green; border:solid 2.5px green";
                $scope.text = "Enjoy!";
            }
            else {
                $scope.style = "color:red; border:solid 2.5px red";
                $scope.text = "Please enter data first";
            }
        };
    }
})();
