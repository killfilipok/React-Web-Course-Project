import selectExpensesTotal from '../../components/selectExpensesTotal'
import expenses from '../fixtures/expenses'

test('should return sum of all array expenses', () => {
    const total = selectExpensesTotal(expenses)

    expect(total).toBe(104700)
})

test('should return amount of only one expense', () => {
    const total = selectExpensesTotal([expenses[0]])

    expect(total).toBe(200)
})

test('should return 0 from empty arr', () => {
    const total = selectExpensesTotal([])

    expect(total).toBe(0)
})
