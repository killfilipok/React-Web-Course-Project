import React from 'react'
import { startLogOut } from '../actions/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const Header = ({ startLogOut }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button className="button button--link" onClick={startLogOut}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})
export default connect(undefined, mapDispatchToProps)(Header)