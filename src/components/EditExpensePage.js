import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    editExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
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
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.editExpense}
                />

                <button onClick={this.startRemoveExpense}>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expenseToEdit) => dispatch(editExpense(id, expenseToEdit)),
    startRemoveExpense: (id) => { return dispatch(startRemoveExpense({ id })) }
})

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)