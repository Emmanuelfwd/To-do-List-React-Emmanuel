import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import Home from '../Pages/Home'
import Todo from '../Pages/Todo'
import Registro from '../Components/Registro'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  )
}

export default Routing