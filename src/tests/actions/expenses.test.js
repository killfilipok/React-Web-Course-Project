import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startRemoveExpenses,
    startSetExpenses,
    setExpenses,
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    startRemoveExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
import { create } from 'domain';

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

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
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', async (done) => {
    const store = createMockStore({})

    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }

    await store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`)
            .once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', async (done) => {
    const store = createMockStore({})

    const defaultExpense = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    await store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpense
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpense)
        done()
    })
})

test('should return valid data from SET_EXPENSES', () => {
    expect(setExpenses(expenses)).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})

    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions()

        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test('should remove expenses from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[0].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

// test('should setup ADD_EXPENSE action obj without DATA', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             amount: 0,
//             note: '',
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })