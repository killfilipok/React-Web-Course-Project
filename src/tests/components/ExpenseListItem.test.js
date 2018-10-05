import ExpenseListItem from '../../components/ExpenseListItem'
import {shallow} from 'enzyme'
import React from 'react'
import expenses from '../fixtures/expenses'

test('should render expense list item', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[0].id} {...expenses[0]}/>)

    expect(wrapper).toMatchSnapshot()
})