import React from 'react'
import { getTareas, agregarTarea, eliminarTarea, actualizarTarea } from '../Services/Services';

useEffect(() => {
  const cargarTareas = async () => {
    try {
      const lista = await getTareas()
      setTareas(lista)
    } catch (error) {
      console.error(error)
    }
  }

  cargarTareas()
}, [])

function TaskList() {
  return (
     <div>
      <div>
        <input type="text" placeholder="Ingresar tarea" />
        <button>Agregar</button>
      </div>

      <div>
        <p>Tareas Completadas</p>
        <div>0</div>
      </div>

      <div>
        <div>
          <input type="checkbox" />
          <span>Ejemplo de tarea 1</span>
          <button>Eliminar</button>
        </div>

        <div>
          <input type="checkbox" />
          <span>Ejemplo de tarea 2</span>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default TaskList