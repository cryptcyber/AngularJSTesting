/**
 * Created by Administrator on 2017-03-22.
 */
(function () {
    'use strict'

    angular.module('myApp')
        .factory('expensesDataService', ['$http', expensesDataService]);

    function expensesDataService($http) {
        var service = {
            getExpenses: getExpenses
        };

        return service;

        function getExpenses() {
            return [
                {title: 'Taxi', description: 'To airport', amount: 89.89},
                {title: 'Lunch', description: 'At airport', amount: 15.40},
                {title: 'Coffee', description: 'Starbucks', amount: 4.93}
            ];
        }

    }
})();
