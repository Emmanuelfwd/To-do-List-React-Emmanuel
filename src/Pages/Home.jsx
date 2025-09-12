import React from 'react'
import Navbar from '../Components/Navbar'
import {motion}  from "motion/react";


function Home() {
  return (
    <div>
        <Navbar />
        <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 8 }}
        
        >Bienvenido a la App</motion.h1>
        <motion.p
        
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 8 }}
        
        >Listo para llevar registro de tus tareas?</motion.p>
    </div>
  )
}

export default Home