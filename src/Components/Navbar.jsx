import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h2>Todo App</h2>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/Todo"> Tareas</Link>
      </nav>
    </div>
  )
}

export default Navbar