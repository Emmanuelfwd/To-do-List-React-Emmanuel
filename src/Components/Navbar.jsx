import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'motion/react'


function Navbar() {
  
  return (
    <motion.div
    
    className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}>
      <motion.h2
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      >
          Todo App
      </motion.h2>
      
      <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <Link to="/" onClick={()=> sessionStorage.clear()}>LogOut</Link> | 
        <Link to="/Todo"> Tareas</Link>
      </motion.nav>
    </motion.div>
  )
}

export default Navbar