angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Activities) {
  $scope.date = 1;
  $scope.activities = Activities.get(1);
  $scope.noActivities = false;
  $scope.selected = [false, true, false, false, false, false, false,
    false, false, false, false, false, false, false];
  $scope.chooseDate= function(date){
    $scope.activities = Activities.get(date);
    $scope.noActivities = !Activities.get(date);
    for(var i = 0; i < 14; i++){
      $scope.selected[i] = false;
    }
    if (date == 31)
      $scope.selected[0] = true;
    else
      $scope.selected[date] = true;
  }
})

.controller('CrmCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ExpenseClaimCtrl', function($scope, ExpenseClaim, $ionicHistory) {
  $scope.isExamine = false;
  $scope.examineList = ExpenseClaim.getExamine();
  $scope.notExamineList = ExpenseClaim.getNotExamine();

  $scope.back = function(){
    $ionicHistory.goBack();
  };
  $scope.changeIsExamine = function(){
    $scope.isExamine = !$scope.isExamine;
  }
})
.controller('ExpenseClaimDetailCtrl', function($scope, ExpenseClaim, $ionicHistory, $stateParams) {
  $scope.expenseClaim = ExpenseClaim.getByHead($stateParams.head);
  $scope.back = function(){
    $ionicHistory.goBack();
  };
})

.controller('WorkCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
.controller('TeamCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
.controller('MeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
});
