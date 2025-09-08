import React, { useState, useEffect } from 'react'
import { getTareas, agregarTarea, eliminarTarea, actualizarTarea } from '../Services/Services'


export default function TaskList() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const lista = await getTareas();
        setTareas(lista);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      {tareas.map((tarea) => (
        <div key={tarea.id}>{tarea.nombre}</div>
      ))}
    </div>
  );
}