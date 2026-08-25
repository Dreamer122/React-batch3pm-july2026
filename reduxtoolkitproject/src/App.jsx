import React from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
const App = () => {
  return (
  <>
  <h1>
    TODO APP
  </h1>
  <div>
    <TodoForm/>
    <TodoList/>
  </div>
  </>
  )
}

export default App