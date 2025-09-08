import React, { useState, useEffect } from 'react'
import { getTareas, agregarTarea, eliminarTarea, actualizarTarea } from '../Services/Services'

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

      <div>
        <p>Tareas Completadas: {tareas.filter(t => t.completada).length}</p>
      </div>

      <div>
        {tareas.map(t => (
          <div key={t.id}>
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => marcarCompletada(t)}
            />
            <span>{t.titulo}</span>
            <button onClick={() => borrarTarea(t.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList