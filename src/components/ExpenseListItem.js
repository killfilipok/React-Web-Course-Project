import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export default ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>Expense List Item: </Link>
        <p>
             {description} 
            - 
            {numeral(amount /100).format('$0,0.00')} 
            created at: {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
)

