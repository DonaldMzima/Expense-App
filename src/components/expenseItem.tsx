import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 11, 1)
  const expenseTitle = 'insurance'
  const expenseAmount = 25000.0

  return (
    <div className="item">
      <div>{expenseDate.toISOString()}</div>
      <div className="item">
        <h2>{expenseTitle}</h2>
        <div className="item__price ">R{expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
