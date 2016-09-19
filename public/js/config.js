/**
 *
 *
 */
function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/view1");
    $stateProvider

        // 
        .state('view1', {
            url: "/view1",
            templateUrl: "partials/partial1",
            data: {
                pageTitle: 'Dashboard',
                authenticate: true
            },
            controller: 'MyCtrl1'
        })


         // Transaction - Single page
        .state('view2', {
            url: "/view2",
            templateUrl: "partials/partial2",
            data: {
                pageTitle: 'Transaction',
                authenticate: true
            },
            controller:'MyCtrl2'
        }) 
} 

angular
    .module('myApp')
    .config(configState) 
    .run(function($rootScope, $state) { 
        $rootScope.$state = $state;   
    });