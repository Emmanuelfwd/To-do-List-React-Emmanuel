import React from 'react'
import Navbar from '../Components/Navbar'
import TaskList from '../Components/TaskList'

function Todo() {
  return (
    <div>
      <Navbar />
      <h1>Lista de Tareas</h1>
      <TaskList />
    </div>
  )
}

export default Todo