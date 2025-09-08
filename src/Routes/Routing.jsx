import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Todo from '../Pages/Todo'

function Routing() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Todo' element={<Todo />} />
      </Routes>
    </Router>
  )
}

export default Routing