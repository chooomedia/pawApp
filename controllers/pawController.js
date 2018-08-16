app.controller('pawController', ['$scope', '$http', function ($scope, $http) {

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

  $scope.title = "the Paw Site";
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
  .config(function ($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  });
