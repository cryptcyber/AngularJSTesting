/**
 * Created by Administrator on 2017-03-22.
 */
describe('expensesDataService', function () {
    beforeEach(module('myApp'));

    it('should return three expense items', inject(function (expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }))

    it('should return a taxi expense', inject(function (expensesDataService) {
        var expenseItems = expensesDataService.getExpenses();
        var testExpenseItem = new ExpenseItem('Taxi', 'To airport', 89.89);
        expect(expenseItems).toContain(testExpenseItem);
    }))

    describe('reasonable expenses', function () {
        var taxi;
        var dinner;
        beforeEach(function () {
            jasmine.addMatchers(customMatchers);
        });

        beforeEach(function () {
            taxi = new ExpenseItem('Taxi', 'To airport', 89.89);
            dinner = new ExpenseItem('dinner', 'Dinner with VIPs', 189.50);
        })

        it('tax should be a reasonable expense', function () {
            expect(taxi).toBeAReasonableExpense();
        })

        it('dinner should not be a reasonable expense', function () {
            expect(dinner).not.toBeAReasonableExpense();
        })
    })

});
