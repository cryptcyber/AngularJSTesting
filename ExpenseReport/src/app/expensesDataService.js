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
                new ExpenseItem('Taxi', 'To airport', 89.89),
                new ExpenseItem('Lunch', 'At airport', 15.40),
                new ExpenseItem('Coffee', 'Starbucks', 4.93)
            ];
        }
    }
})();
