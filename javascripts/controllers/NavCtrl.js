'use strict';

app.controller( "NavCtrl", function( $rootScope, $scope, $window, $location, AuthService ){
    $scope.logoutUser = () => {
        delete $rootScope.uid;
        $window.localStorage.clear();
        AuthService.logout();
        $location.path('./auth');
    };
});