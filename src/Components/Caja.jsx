import {motion}  from "motion/react";
import React, { useState, useEffect } from 'react'
import { actualizarTarea } from '../Services/Services'
import TaskList from "./TaskList";

function Caja({ tareas, marcarCompletada, borrarTarea, cargarTareas}) {

const [editandoId, setEditandoId] = useState(null)
const [tituloEditado, setTituloEditado] = useState("")


const transition = {
    duration: 1,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
}
 const iniciarEdicion = (tarea) => {
    setEditandoId(tarea.id)
    setTituloEditado(tarea.titulo)
  }

  const cancelarEdicion = () => {
    setEditandoId(null)
    setTituloEditado("")
  }

  const guardarEdicion = async (tarea) => {
    try {
      await actualizarTarea({ ...tarea, titulo: tituloEditado })

      if (tituloEditado != "") {
        setEditandoId(null)
        setTituloEditado("")
        await cargarTareas()
        
      }
      else{
        alert("No se puede dejar en blanco")
        return
      }
      
    } catch (error) {
      console.error("Error al guardar edición:", error)
    }
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
            transition={transition}
          >
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => marcarCompletada(t)}
            />

            {editandoId === t.id ? (
              <>
                <input
                  type="text"
                  value={tituloEditado}
                  onChange={(e) => setTituloEditado(e.target.value)}
                />
                <motion.button onClick={() => guardarEdicion(t)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Guardar
                </motion.button>
                <motion.button onClick={cancelarEdicion}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancelar
                </motion.button>
              </>
            ) : (
              <>
                <span>Tarea: </span>
                <span>{t.titulo}</span>
                <span> Fecha: </span>
                <span>{t.fecha}</span>
                <motion.button onClick={() => iniciarEdicion(t)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Editar
                </motion.button>
              </>
            )}

            <motion.button onClick={() => borrarTarea(t.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
