import React from 'react'
import Navbar from '../Components/Navbar'
import TaskList from '../Components/TaskList'
import {motion}  from "motion/react";


function Todo() {
  return (
    <div>
      <Navbar />
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 8 }}
        
        >Lista de Tareas</motion.h1>
      <TaskList />
      
    </div>
  )
}

export default Todo