(function (){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.text = "";
        $scope.items = "";

        $scope.checkTooMuch = function (){
            var len = 0;
            var items = $scope.items.split(',');
            for (var i=0; i<items.length; i++) {
                if (items[i].trim()!=='')
                    len ++;
            };
            if (len>3)
                $scope.text = "Too much!";
            else if (len>0)
                $scope.text = "Enjoy!";
            else
                $scope.text = "Please enter data first";
        };
    }
})();
