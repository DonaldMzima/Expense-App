import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props: {
  title: string

  amount: number
}) => {
  return (
    <div className="item">
      <div className="item">
        <h2>{props.title}</h2>
        <div className="item__price ">R{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
