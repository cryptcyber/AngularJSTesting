/**
 * Created by Administrator on 2017-03-21.
 */
(function () {
    'use strict'

    angular.module('myApp')
        .controller('expensesController', ['expensesDataService', expensesController]);

    function  expensesController(expenseDataService) {
        var vm = this;

        vm.activate = activate;
        vm.expenseItems = [];

        activate();

        function activate() {
            return vm.expenseItems = expenseDataService.getExpenses();
        }

    }
})();
