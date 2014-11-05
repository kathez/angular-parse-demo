/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos
 */


angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) {
        $scope.userName = 'drstearns';
        $scope.getRepos = function() {
            $scope.loading=true;
            $http.get('https://api.github.com/users/' + $scope.userName + '/repos')
                .success(function(data) {
                    $scope.repos = data;
                    $scope.errorMessage = null;
                    $scope.loading = false;
                })
                .error(function(err) {
//                   alert('User does not exist!');
                    //apply the default value when there is error message, and if not, present the text here
                    $scope.errorMessage = err.message || 'User does not exist!';
                })
                .finally(function() {
                    $scope.loading = false;
                });

        };
    });