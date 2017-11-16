'use strict';

app.controller('WishlistCtrl', function($rootScope, $scope, MovieService){

    const getMovies = () => {
        MovieService.getWishlistMovies($rootScope.uid).then((results) => {
            $scope.movies = results; 
        }).catch((err) => {
            console.log('error in getRatedMovies:', err);
        });
    };

    getMovies();

    $scope.deleteMovie = (movieId) => {
        MovieService.deleteMovie(movieId).then((results) => {
            getMovies();
        }).catch((err) => {
            console.log('error in deleteMovie:', err);
        });
    };
});