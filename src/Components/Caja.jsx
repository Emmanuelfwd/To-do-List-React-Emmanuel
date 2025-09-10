import React from 'react'

function Caja({ tareas, marcarCompletada, borrarTarea }) {
  return (
    <div>
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

export default Caja
