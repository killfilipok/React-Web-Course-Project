import React from 'react'

import {NavLink} from 'react-router-dom'
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Home shity home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create page</NavLink>
    </header>
)
export default Header