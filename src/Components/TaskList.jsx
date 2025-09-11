  import React, { useState, useEffect } from 'react'
  import { getTareas, agregarTarea, eliminarTarea, actualizarTarea } from '../Services/Services'
  import Caja from './Caja'
  import {motion}  from "motion/react";

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
        await agregarTarea({ titulo: nuevaTarea, completada: false, fecha: new Date().toISOString().slice(0,10)})
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
            onKeyDown={(e) => { if(e.key === "Enter") agregarNuevaTarea() }}
          />
          <motion.button onClick={agregarNuevaTarea}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          transition={{ type: "spring", stiffness: 300 }} >
            Agregar
            </motion.button>
            
          
        </div>

        <Caja
          tareas={tareas}
          marcarCompletada={marcarCompletada}
          borrarTarea={borrarTarea}
          cargarTareas={cargarTareas}
        />
      </div>
    )
  }

  export default TaskList
