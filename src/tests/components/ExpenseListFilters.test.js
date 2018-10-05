import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with altData correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'date'
    wrapper.find('input').prop('onChange')({
        target: {
            value: value
        }
    })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should sortBy date', () => {
    wrapper.find('select').prop('onChange')({
        target: {
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sortBy amount', () => {
    wrapper.find('select').prop('onChange')({
        target: {
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        endDate: moment(0).add(3, 'days'),
        startDate: moment(0)
    })
    expect(setEndDate).toHaveBeenCalledWith(moment(0).add(3, 'days'))
    expect(setStartDate).toHaveBeenCalledWith(moment(0))
})

test('should handle focus change', () => {
    const onFocusChange = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(onFocusChange)
    expect(wrapper.state('calendarFocused')).toBe(onFocusChange)
})