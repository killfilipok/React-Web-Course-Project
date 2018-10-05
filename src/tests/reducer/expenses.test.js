import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    })

    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should dont remove invalid id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: -1
    })

    expect(state).toEqual(expenses)
})
test('should dont add expense', () => {
    const expense = {
        expense: { test: 'expense' }
    }
    const result = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    })

    expect(result).toEqual([...expenses, expense])
})

test('should edit expense', () => {
    const updates = {
        'description': 'lol Its Me Mario'
    }
    const result = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    })

    expect(result[0]).toEqual({ ...expenses[0], ...updates })
})
test('should dont edit invalid id', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            'description': 'lol Its Me Mario'
        }
    })

    expect(state).toEqual(expenses)
})