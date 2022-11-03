import React from 'react'
import ExpenseItem from './components/expenseItem'

const App = () => {
  const expenses = [
    { title: 'Toilet Paper', amount: 25000 },
    { title: 'New Tv', amount: 25000 },
    { title: 'insurance', amount: 25000 },
    { title: 'New Desk (wooden)', amount: 25000 },
  ]

  return (
    <div>
      <h1>Alraedy started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  )
}
export default App
