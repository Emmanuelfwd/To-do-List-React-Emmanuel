// src/components/TaskList.jsx

import React, { useState, useEffect } from 'react'
import { getTareas, agregarTarea, eliminarTarea, actualizarTarea } from '../Services/Services'
import Caja from './Caja'

function TaskList() {
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  useEffect(() => {
    cargarTareas()
  }, [])

  const cargarTareas = async () => {
    try {
      const lista = await getTareas()
      setTareas(lista)
    } catch (error) {
      console.error("Error al cargar tareas:", error)
    }
  }

  const agregarNuevaTarea = async () => {
    if (!nuevaTarea.trim()) return
    try {
      await agregarTarea({ titulo: nuevaTarea, completada: false })
      setNuevaTarea('')
      cargarTareas()
    } catch (error) {
      console.error("Error al agregar tarea:", error)
    }
  }

  const borrarTarea = async (id) => {
    try {
      await eliminarTarea(id)
      cargarTareas()
    } catch (error) {
      console.error("Error al eliminar tarea:", error)
    }
  }

  const marcarCompletada = async (tarea) => {
    try {
      await actualizarTarea({ ...tarea, completada: !tarea.completada })
      cargarTareas()
    } catch (error) {
      console.error("Error al actualizar tarea:", error)
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Ingresar tarea"
          value={nuevaTarea}
          onChange={e => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarNuevaTarea}>Agregar</button>
      </div>

      <Caja
        tareas={tareas}
        marcarCompletada={marcarCompletada}
        borrarTarea={borrarTarea}
      />
    </div>
  )
}

export default TaskList
