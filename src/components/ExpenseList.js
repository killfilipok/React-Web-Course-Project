import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import ExpensesSummary from './ExpensesSummary'

export const ExpenseList = (props) => (
    <div>
        <ExpensesSummary />
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map((expense, index) =>
                        <ExpenseItem
                            key={expense.id}
                            {...expense}
                        />
                    )
                )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

