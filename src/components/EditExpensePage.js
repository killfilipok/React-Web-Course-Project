import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    startEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    startRemoveExpense = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        // .then(() => {
        //     this.props.history.push('/')
        // })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.startEditExpense}
                    />

                    <button
                        className="button--grey"
                        onClick={this.startRemoveExpense}
                    >
                        Remove Expense
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expenseToEdit) => dispatch(startEditExpense(id, expenseToEdit)),
    startRemoveExpense: (id) => { return dispatch(startRemoveExpense({ id })) }
})

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)