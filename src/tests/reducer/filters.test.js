import moment from 'moment'
import filtersReducer from '../../reducers/filter'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        sortBy: 'amount'
    }

    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date')
})


test('should set test', () => {
    const text = 'lol'

    const action = { type: 'SET_TEXT_FILTER', text }
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe(text)
})

test('should set StartDate', () => {
    const startDate = moment(0).add(1, 'days')

    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined, action)

    expect(state.startDate).toEqual(startDate)
})


test('should set EndDate', () => {
    const endDate = moment(0).subtract(1, 'days')

    const action = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filtersReducer(undefined, action)

    expect(state.endDate).toEqual(endDate)
})

