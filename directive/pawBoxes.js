var app = angular;
app.directive('pawBoxes', function($compile) {
    return {
        transclude: true,
        scope: {
            label: '@'
        },
        templateUrl: 'directives/pawBoxes.html',
        // append
        replace: true,
        // attribute restriction
        restrict: 'E',
        // linking method
        link: function($scope, element, attrs) {
            switch (attrs['type']) {
                case "text":
                // append input field to "template"
                case "select":
                // append select dropdown to "template"
            }
        }
    }
});