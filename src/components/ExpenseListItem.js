import React from 'react'
import {Link} from 'react-router-dom'

export default ({description, amount, createdAt,id}) => (
    <div>
        <Link to={`/edit/${id}`}>Expense List Item: </Link>
        <p>{description} - {amount} created at: {createdAt}</p>
    </div>
)
