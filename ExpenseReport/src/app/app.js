/**
 * Created by Administrator on 2017-03-16.
 */
(function() {
    'use strict';

    // Create the module and define its dependencies
    var app = angular.module("myApp", ["ngRoute"]);

    // config always runs before the services and ready.
    app.config( function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'app/Expense/expense.html'})
            .when('/admin', {templateUrl: 'app/admin/admin.html'})
            .otherwise({redirectTo: '/'});
    }
    );
})();