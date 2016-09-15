angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo) {
	$scope.friends = userInfo.friends;
	$scope.currentUser = userInfo.currentUser;
});
