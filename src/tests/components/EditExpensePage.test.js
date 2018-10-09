import React from 'react'
import { EditExpensePage } from '../../components/EditExpensePage'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[1]} />)
})

test('should render EditExpense Page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should submit edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1])
})

test('should remove expense', () => {
    wrapper.find('button').prop('onClick')()
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startRemoveExpense).toHaveBeenCalledWith(expenses[1].id)
})