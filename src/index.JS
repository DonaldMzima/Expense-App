import './index.css'
import App from './App'
import React from 'react'
import Test from './test'
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const myApp = () => {
  return (
    <>
      <App />
      <Test />
    </>
  )
}

export default myApp
