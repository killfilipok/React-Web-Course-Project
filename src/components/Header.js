import React from 'react'
import { startLogOut } from '../actions/auth'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Header = ({ startLogOut }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" >Home shity home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create page</NavLink>
        <button onClick={startLogOut}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})
export default connect(undefined, mapDispatchToProps)(Header)