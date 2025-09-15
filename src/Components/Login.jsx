import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { validarLogin } from '../Services/Services'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const controladorLogin = async () => {
    const valido = await validarLogin(email, password)

    if (valido) {
      sessionStorage.setItem('usuario', email)
      navigate('/home')
    } else {
      setError('Correo o contraseña incorrectos')
    }
  }

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Iniciar Sesión</h2>
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
      <button onClick={controladorLogin}>Entrar</button>
      <br />
      <hr />
      <Link to="/registro">¿No tienes cuenta? Regístrate aquí</Link>
    </motion.div>
  )
}

export default Login