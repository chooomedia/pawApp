app.controller('pawController', ['$scope', '$http', 'pawService', function ($scope, $http, pawService) {

    $scope.getData = function (searchField) {
        var API_KEY = '4c94cd4a5445ea5f72b710ea8b3e59e0';
        $http.get("http://api.flickr.com/services/rest/", {
            params: {
                method: "flickr.photos.search",
                api_key: API_KEY,
                format: "json",
                nojsoncallback: 1,
                per_page: "6",
                tags: searchField,
                tag_mode: "all"
            }
        })
            .then(function (response) {
                $scope.images = response.data.photos.photo.map(function (photo) {
                    return "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg"
                        .replace("{farm-id}", photo.farm)
                        .replace("{server-id}", photo.server)
                        .replace("{id}", photo.id)
                        .replace("{secret}", photo.secret)
                });
                console.log($scope.images);
            });
        // Public API
        return {
            getPhotosByTag: function (tag) {
                return getPhotosByTagFn(tag);
            },
            getApiKey: function(){
                return API_KEY;
            }
        };
    };

    $scope.data = pawService('Suche');
    $scope.logo =
        {
            url: 'paw.logo.png',
            title: 'the Paw Logo',
            alt: 'Logo 2018'
        };

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
    $scope.links = [
        {
            title: "Home",
            pathTo: "/"
        },
        {
            title: "Bio",
            step: "Über uns",
            pathTo: "/" + this.title
        },
        {
            title: "Album",
            step: "Impressionen",
            pathTo: "/" + this.title
        },
        {
            title: "Karte",
            step: "Wie sie uns finden",
            pathTo: "/" + this.title
        }
    ]
}])

    .factory('pawService', function () {
        return function (data) {
            if (data.length >= 3) {
                return data;
            } else {
                console.log('Dein Eintrag ist zu kurz');
            }
        }
    });