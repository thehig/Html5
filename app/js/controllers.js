

/* Controllers */



/*A note on controllers within an ng-view:
 *       When you change page within an ng-view, the associated pages controller executes
 *       Don't put intensive code in an auto-executing block within a view controller
 *       For intensive code, add a service placeholder and populate it in a single function call
 *       */

angular.module('vonbismarkApp.controllers', [])
    .controller('TopCtrl', ['$scope', '$location', '$anchorScroll', 'blogData', 'standaloneProjectsData', 'wardrobeProjectsData', function($scope, $location, $anchorScroll, blogData, standaloneProjectsData, wardrobeProjectsData) {

        console.log("TopCtrl");

        var blogPosts = [  {
            "header": "The Kinect Saw Something",
            "postdate": "16/07/2014",
            "author" : "Frank",
            "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "Hoorah for Steak Sandwiches!!",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "When will the garden be clean?!",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "The lads get a coffee machine",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }];

        var standaloneProjectsPosts = [  {
            "header": "AIB Tech Age",
            "postdate": "16/07/2014",
            "author" : "Frank",
            "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
            {
                "header": "Funky Christmas Jumpers",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "CBS Outdoor",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "Croke Park",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }];

        var wardrobeProjectsPosts = [  {
            "header": "Lewis and Clark Shirts",
            "postdate": "16/07/2014",
            "author" : "Frank",
            "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
            {
                "header": "Fran and Jane",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "Cadburys Joyville",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                "header": "Liffey Valley",
                "postdate": "16/07/2014",
                "author" : "Frank",
                "content": "Sample Paragraph with more text blahdahaha with a trailing end for users to click to expand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }];

        angular.forEach(blogPosts, function(blogPost){
            //blogData is the service value that will contain all of the blogs, to be loaded only once
            blogData.push(blogPost);
        });

        angular.forEach(wardrobeProjectsPosts, function(wardrobeProjectsPost){
            //blogData is the service value that will contain all of the blogs, to be loaded only once
            wardrobeProjectsData.push(wardrobeProjectsPost);
        });

        angular.forEach(standaloneProjectsPosts, function(standaloneProjectsPost){
            //blogData is the service value that will contain all of the blogs, to be loaded only once
            standaloneProjectsData.push(standaloneProjectsPost);
        });

        /*This code gives us a function that allows us to use an ng-click behavior to scroll the screen,
         * thus replacing the anchor hash linking that Angular uses internally
         * Source: http://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs
         * */
        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {

        console.log("HomeCtrl");
    }])
    .controller('ContactCtrl', ['$scope', function($scope) {

        console.log("ContactCtrl");
    }])
    .controller('ProjectMenuCtrl', ['$scope', function($scope) {

        console.log("ProjectMenuCtrl");
    }])
    .controller('WardrobeCtrl', ['$scope', 'wardrobeProjectsData', function($scope, wardrobeProjectsData) {

        console.log("WardrobeCtrl");
        $scope.data = wardrobeProjectsData;

        $scope.selectedItem = $scope.data[0];
        $scope.navClick = function(srcItem)
        {
            $scope.selectedItem = srcItem;
        };

        /**************Expanding Article**************/
        $scope.activePosition = null;

        $scope.check = function($index) {

            $scope.activePosition = $scope.activePosition == $index ? -1 : $index;

            console.log($scope.activePosition);

        }
    }])
    .controller('BlogCtrl', ['$scope', 'blogData', function($scope, blogData) {

        console.log("BlogCtrl");
        $scope.data = blogData;

        $scope.selectedItem = $scope.data[0];
        $scope.navClick = function(srcItem)
        {
            $scope.selectedItem = srcItem;
        };

        /**************Expanding Article**************/
        $scope.activePosition = null;

        $scope.check = function($index) {

            $scope.activePosition = $scope.activePosition == $index ? -1 : $index;

            console.log($scope.activePosition);

        }
    }])
    .controller('StandaloneProjectsCtrl', ['$scope', 'standaloneProjectsData', function($scope, standaloneProjectsData) {

        console.log("StandaloneProjectsCtrl");
        $scope.data = standaloneProjectsData;

        $scope.selectedItem = $scope.data[0];
        $scope.navClick = function(srcItem)
        {
            $scope.selectedItem = srcItem;
        };

        /**************Expanding Article**************/
        $scope.activePosition = null;

        $scope.check = function($index) {

            $scope.activePosition = $scope.activePosition == $index ? -1 : $index;

            console.log($scope.activePosition);

        }
    }]);

