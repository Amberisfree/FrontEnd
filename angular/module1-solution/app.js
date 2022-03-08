(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "";
  $scope.message= "";

  $scope.checkLunch=function(name){
    var name=$scope.name;
    var list=name.split(",");
    var number=list.length;

    if(number>3){
      $scope.message= "You have eaten too much!";
    }else {
      $scope.message= "Enjoy!";
    };
  }


}

})();
