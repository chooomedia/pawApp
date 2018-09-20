app.controller('pawController', [
    '$scope',
    '$filter',
    '$http',
    '$window',
    '$anchorScroll',
    '$location',
    'pawService', function (
        $scope,
        $filter,
        $http,
        $window,
        $anchorScroll,
        $location,
        pawService) {

        $scope.getData = function (searchField) {
            var _KEY = '5556067055.69346fc.87bdd873bb9244d4ae5f69e78204d469';
            var CL_KEY = '69346fc2d3f3447ba1cb71eb3eef7bfd';
            $http.get('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + _KEY, {
                params: {

                    tags: searchField
                }
            })
                .then(function (data) {
                    $scope.images = data;
                    console.log(data);
                });
        };

        $scope.search = null;
        $scope.showPreSearchBar = function() {
            return $scope.search == null;
        };
        $scope.initiateSearch = function() {
            $scope.search = '';
            $scope.clicker = true;
            return $scope.clicker;
        };
        $scope.showSearchBar = function() {
            return $scope.search != null
        };
        $scope.endSearch = function() {
            $scope.clicker = false;
            return $scope.search = null;
        };
        $scope.submit = function() {
            console.error('Search function not yet implemented');
        };

        // to focus on input element after it appears
        $scope.$watch(function() {
            return document.querySelector('#search-bar:not(.ng-hide)');
        }, function(){
            document.getElementById('search-input').focus();
        });

        $scope.isActive = false;
        $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
        };

        $scope.data = pawService('w3e');
        $scope.logo =
            {
                url: 'paw.logo.png',
                title: 'the Paw Logo',
                alt: 'Logo 2018'
            };

        $scope.links = [
            {
                "title": "Home",
                "pathTo": "/"
            },
            {
                "title": "Bio",
                "step": "Über uns",
                "pathTo": "/"
            },
            {
                "title": "Album",
                "step": "Impressionen",
                "pathTo": "/"
            },
            {
                "title": "Karte",
                "step": "Wie sie uns finden",
                "pathTo": "/"
            }
        ];

        /* get View in Menu */

        /* get the Main Content */
        $http({
            method: 'GET',
            url: 'data/pawPages.json'
        }).then(function (response, $anchorScroll) {
            $scope.pages = response.data;
        }, function (error) {
            console.log(error);
        }, 3000);


        /* get extended Content */
        $http({
            method: 'GET',
            url: 'data/pawContent.json'
        }).then(function (response) {
            $scope.boxes = response.data;
        }, function (error) {
            console.log(error);
        }, 2000);

        $scope.main = [
            {title: 'Welcome to Paw AngularJS App'},
            {content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
        ];

    }
])

    .factory('pawService', function () {
        return function (data) {
            if (data.length >= 3) {
                return data;
            } else {
                console.log('Dein Eintrag ist zu kurz');
            }
        }
    });