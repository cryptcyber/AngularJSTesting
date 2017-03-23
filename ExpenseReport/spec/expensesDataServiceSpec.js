/**
 * Created by Administrator on 2017-03-22.
 */
describe('expensesDataService', function () {
    beforeEach(module('myApp'));

    it('should return three expense items', inject(function (expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }))
});
