app.controller('pawController', function ($scope) {
        $scope.title = "the Paw Site";
        $scope.boxes = [
            {
                image: "http://www.placehold.it/80/80",
                title: " Testtitle 1",
                createDate: new Date(),
                content: "At vero eos et accusam et justo duo doAt vero eos et accusam et justo duo do",
                footer: "copyright 2018"
            },
            {
                image: "http://www.placehold.it/80/80",
                title: " Testtitle 4",
                createDate: new Date(),
                content: "At vero eos et accusam et justo duo doAt vero eos et accusam et justo duo do",
                footer: "copyright 2018"
            },
            {
                image: "http://www.placehold.it/80/80",
                title: " Testtitle 3",
                createDate: new Date(),
                content: "At vero eos et accusam et justo duo doAt vero eos et accusam et justo duo do",
                footer: "copyright 2018"
            },
            {
                image: "http://www.placehold.it/80/80",
                title: " Testtitle 3",
                createDate: new Date(),
                content:"At vero eos et accusam et justo duo doAt vero eos et accusam et justo duo do",
                footer: "copyright 2018"
            },
            {
                image: "http://www.placehold.it/80/80",
                title: " Testtitle 3",
                createDate: new Date(),
                content: "At vero eos et accusam et justo duo doAt vero eos et accusam et justo duo do",
                footer: "copyright 2018"
            },
            {
                image: "http://www.placehold.it/80/80",
                title: " Testtitle 3",
                createDate: new Date(),
                content: "At vero eos et accusam et justo duo doAt vero eos et accusam et justo duo do",
                footer: "copyright 2018"
            }
        ];

        $scope.links = [
            {   title: "Home",
                pathTo: "/"
            },
            {   title: "Bio",
                step: "Über uns",
                pathTo: "/" + this.title
            },
            {   title: "Album",
                step: "Impressionen",
                pathTo: "/" + this.title
            },
            {   title: "Karte",
                step: "Wie sie uns finden",
                pathTo: "/" + this.title
            }
        ]
    })
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    })
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    });
