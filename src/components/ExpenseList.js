import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className="content-container">
        <div>
            <div>Expense</div>
            <div>Amount</div>
        </div>
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

