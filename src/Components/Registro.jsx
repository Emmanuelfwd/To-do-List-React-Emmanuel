import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function Registro() {
  return (
    <motion.div
      className="registro-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2>Crear Cuenta</h2>
      <form className="registro-form">
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <label htmlFor="name">Nombre completo</label>
          <input id="name" type="text" placeholder="Juan Pérez" required />
        </motion.div>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="tucorreo@ejemplo.com" required />
        </motion.div>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="********" required />
        </motion.div>

        <motion.button
          type="submit"
          className="btn-registro"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Registrarse
        </motion.button>
      </form>

      <p className="switch-link">
        ¿Ya tienes cuenta? <Link to="/Login">Inicia sesión</Link>
      </p>
    </motion.div>
  )
}

export default Registro