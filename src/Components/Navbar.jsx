import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h2>Todo App</h2>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/tareas"> Tareas</Link>
      </nav>
    </div>
  )
}

export default Navbar