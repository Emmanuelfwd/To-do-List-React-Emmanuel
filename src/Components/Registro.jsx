import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { registrarUsuario, getUsuarios } from '../Services/Services'
import {Link} from 'react-router-dom'

function Registro() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const controladorRegistro = async () => {
    try {
      const usuariosExistentes = await getUsuarios()
      const yaExiste = usuariosExistentes.some(u => u.email === email)

      if (yaExiste) {
        setError('Este correo ya está registrado.')
        return
      }

      await registrarUsuario({ email, password })
      navigate('/login')
    } catch (error) {
      setError('Hubo un problema al registrar.')
    }
  }

  return (
    <motion.div
      className="registro-container"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Registro</h2>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={controladorRegistro}>Registrarse</button>
      <br />
      <Link to="/"> ¿Ya tienes cuenta? vuelve a Login</Link>
      
    </motion.div>
  )
}

export default Registro