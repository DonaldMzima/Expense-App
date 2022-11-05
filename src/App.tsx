import React from 'react'
import ExpenseItem from './components/expenseItem'

const App = () => {
  const expenses = [
    { title: 'Toilet Paper', amount: 25.0, date: new Date(2022, 11, 1) },
    { title: 'New Tv', amount: 2490.99, date: new Date(2022, 11, 1) },
    { title: 'insurance', amount: 249.99, date: new Date(2022, 11, 1) },
    { title: 'New Desk (wooden)', amount: 300.99, date: new Date(2022, 11, 1) },
  ]

  return (
    <div>
      <h1>Alraedy started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={new Date(expenses[0].date)}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={new Date(expenses[0].date)}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  )
}
export default App
