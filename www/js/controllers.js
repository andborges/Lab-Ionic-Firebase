angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $firebaseObject) {
  var ref = new Firebase("https://sizzling-inferno-5616.firebaseio.com/");
  $scope.chats = $firebaseObject(ref);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
