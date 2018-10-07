import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import React from 'react'

test('should return total count and amount for no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>)

    expect(wrapper).toMatchSnapshot()
})


test('should return total count and amount', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={15000}/>)

    expect(wrapper).toMatchSnapshot()
})


test('should return total count and amount fro one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1511}/>)

    expect(wrapper).toMatchSnapshot()
})
