'use strict';

app.controller( "NavCtrl", function( $rootScope, $scope, $window, $location ){
    $scope.logoutUser = () => {
        delete $rootScope.uid;
        $window.localStorage.clear();
        $location.path('./auth');
    };
});