import React from 'react'
import { connect } from 'react-redux'
import SelectExpensesTotal from './SelectExpensesTotal'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const total = numeral(expensesTotal / 100).format('$0,0.00')
    const textToRender = `viewing ${expensesCount} expense${expensesCount>1?'s' : ''} totaling: ${total}`

    return (
        <div>
            <h3>{textToRender}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: SelectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)