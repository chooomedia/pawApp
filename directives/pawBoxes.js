app.directive('appBox', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=',
        },
        templateUrl: 'directives/pawBoxes.html',
    }
});
