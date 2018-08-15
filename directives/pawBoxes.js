app.directive('appBox', function() {
    return {
        restrict: 'E',
        scope: {
            label: '@',
            info: '='
        },
        templateUrl: 'directives/pawBoxes.html',
    };
});