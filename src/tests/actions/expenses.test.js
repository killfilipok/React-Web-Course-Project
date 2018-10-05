import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup REMOVE expense action obj', () => {
    const action = removeExpense({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup UPDATE action obj', () => {
    const id = '123abc'
    const updates = {
        description: 'someDescription',
        amount: 'someAmount',
        note: 'someNotes',
        createdAt: 'someCreatedAt'
    }

    const action = editExpense(id, updates)

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    })
})

test('should setup ADD_EXPENSE action obj', () => {
    const obj = {
        description: 'someDescription',
        amount: 'someAmount',
        note: 'someNotes',
        createdAt: 'someCreatedAt'
    }

    const action = addExpense(obj)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...obj,
            id: expect.any(String)
        }
    })
})

test('should setup ADD_EXPENSE action obj without DATA', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})