import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let StartAddExpense, history, wrapper

beforeEach(()=>{
    StartAddExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage startAddExpense={StartAddExpense} history={history}/>)
   
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(StartAddExpense).toHaveBeenLastCalledWith(expenses[1])
})