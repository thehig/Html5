'use strict';


// Declare app level module which depends on filters, and services
angular.module('vonbismarkApp', [
    'ngRoute',
    'vonbismarkApp.directives',
    'vonbismarkApp.controllers',
    'vonbismarkApp.services'
    /*'vonbismarkApp.filters'*/
]).
    /* Route Provider:
    *       Provides handling of the ng-view
    *           Loads a partial html file into the ng-view
    *           Initializes a new controller with the view
    *           Associates a css file with the HTML Header (See Directives) */
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl',
            css: 'css/home.css'});
        $routeProvider.when('/blog', {
            templateUrl: 'partials/blog.html',
            controller: 'BlogCtrl',
            css: 'css/blog.css'});
        $routeProvider.when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactCtrl',
            css: 'css/contact.css'});
        $routeProvider.when('/projectHome', {
            templateUrl: 'partials/projectHome.html',
            controller: 'ProjectMenuCtrl',
            css: 'css/projectHome.css'});
        $routeProvider.when('/wardrobe', {
            templateUrl: 'partials/wardrobeProjectPage.html',
            controller: 'WardrobeCtrl',
            css: 'css/wardrobeProject.css'});
        $routeProvider.when('/standalone', {
            templateUrl: 'partials/standaloneProjects.html',
            controller: 'StandaloneProjectsCtrl',
            css: 'css/standaloneProjects.css'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    /* On RouteProvider ChangeSuccess
    *       If a scrollTo parameter was specified, call the scrollTo method appropriately */
    .run(function($rootScope, $location, $anchorScroll, $routeParams) {

        /*
            Example Usage:        <a href="#/test?scrollTo=foo">Test/Foo</a>
            Notes:                  Causes a refresh of the page, even if you're on that page
                                    Be careful using this if you've logic in your controller */
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        var old = $location.hash();
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
    });
});

/* Directives */


angular.module('vonbismarkApp.directives', [])

    /* This block of code adds a Directive to the HTML Head element
     *          This in turn allows us to add a css property to our route, and injects said css link
     *          into the header when the router takes effect */

     .directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    if(current && current.$$route && current.$$route.css){
                        if(!Array.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!Array.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);

/*

angular.module('vonbismarkApp.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);



*/
/* Filters *//*

angular.module('vonbismarkApp.filters', []).
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);



*/
/* Services */

angular.module('vonbismarkApp.services', []).
    /*Create a service value to hold on to the blog posts for us.
     *      This will be populated in the TopCtrl initialization */
    value('blogData', [ ]).
    value('standaloneProjectsData', [ ]).
    value('wardrobeProjectsData', [ ]);

