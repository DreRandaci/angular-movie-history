'use strict';

app.controller("MovieDetailCtrl", function( $routeParams, $scope, MovieService ) {
    $scope.movie = {};

    const getMovie = () => {
        MovieService.getSingleMovie($routeParams.id).then((results) => {
            $scope.movie = results.data;
        }).catch((err) => {
            console.log('error in getSingleMove:', err);
        });
    };

    getMovie();

    $scope.switchWatched = ( movie ) => {
        movie.isWatched = true;
        let updatedMovie = MovieService.createMovieObj( movie );
        MovieService.updateMovie( updatedMovie, $routeParams.id).then(() => {
            getMovie();
        }).catch((err) => {
            console.log('error in updateMovie:', err);
        });
    };

    $scope.starChange = (event, movie) => {
        if(event.rating) {
            movie.rating = event.rating;
            let updatedMovie = MovieService.createMovieObj( movie );
            MovieService.updateMovie( updatedMovie, $routeParams.id).then(() => {
                getMovie();
            }).catch((err) => {
                console.log('error in updateMovie:', err);
            });
        }
    };
});