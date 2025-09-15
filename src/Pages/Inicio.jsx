import React from 'react'
import Login from '../Components/Login'
import {motion}  from "motion/react";

function Inicio() {
  return (
    <div>
    <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 8 }}
            
            >Bienvenido</motion.h1>
    <Login />
    </div>
  )
}

export default Inicio