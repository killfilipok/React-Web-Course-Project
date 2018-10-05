import moment from 'moment'
import {
    setTextFilter,
    setEndDate,
    setStartDate,
    sortByDate,
    sortByAmount
} from '../../actions/filters'

test('should return TEXT_FILTER', () => {
    const text = 'text'
    const action = setTextFilter(text)

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})

test('should return TEXT_FILTER without DATA', () => {
    const action = setTextFilter()

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate sortByAmount action obj', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate sortByDate action obj', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})