import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className="item">
      <div>27 October 2022</div>
      <div className="item">
        <h2>insurance</h2>
        <div className="item__price ">R250,000</div>
      </div>
    </div>
  )
}

export default ExpenseItem
