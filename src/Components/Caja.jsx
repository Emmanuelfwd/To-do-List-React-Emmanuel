import React from 'react'
import {motion}  from "motion/react";

function Caja({ tareas, marcarCompletada, borrarTarea }) {

const transition = {
    duration: 1,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
}


  return (
    <div>
      <div>
        <p>Tareas Completadas: {tareas.filter(t => t.completada).length}</p>
      </div>

      <div>
        {tareas.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}>
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => marcarCompletada(t)}
            />
            <span>{t.titulo}</span>
            <motion.button onClick={() => borrarTarea(t.id)}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }} 
                transition={{ type: "spring", stiffness: 300 }}    
            >
                    Eliminar
                    </motion.button>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Caja
