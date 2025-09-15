/* Obtener todas las tareas */
export async function getTareas() {
    try {
        const response = await fetch('http://localhost:3001/tareas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const tareas = await response.json();
        return tareas;
    } catch (error) {
        console.error("Hay un error al recuperar tareas", error);
        throw error;
    }
}

/* Agregar una tarea */
export async function agregarTarea(tarea) {
    try {
        const response = await fetch('http://localhost:3001/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarea)
        });
        return await response.json();
    } catch (error) {
        console.error("Hay un error al agregar la tarea", error);
        throw error;
    }
}

/*  Eliminar tarea por id */
export async function eliminarTarea(id) {
    try {
        await fetch(`http://localhost:3001/tareas/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Hay un error al eliminar la tarea", error);
        throw error;
    }
}

/* Actualizar tarea */
export async function actualizarTarea(tarea) {
    try {
        const response = await fetch(`http://localhost:3001/tareas/${tarea.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tarea)
        });
        return await response.json();
    } catch (error) {
        console.error("Hay un error al actualizar la tarea", error);
        throw error;
    }
}

/* Obtener todos los usuarios */
export async function getUsuarios() {
  try {
    const response = await fetch('http://localhost:3001/usuarios', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await response.json()
  } catch (error) {
    console.error("Error al obtener usuarios", error)
    throw error
  }
}

/* Registrar nuevo usuario */
export async function registrarUsuario(usuario) {
  try {
    const response = await fetch('http://localhost:3001/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario)
    })
    return await response.json()
  } catch (error) {
    console.error("Error al registrar usuario", error)
    throw error
  }
}

/* Validar login (email + password) */
export async function validarLogin(email, password) {
  try {
    const response = await fetch(`http://localhost:3001/usuarios?email=${email}&password=${password}`)
    const usuarios = await response.json()
    return usuarios.length > 0 // true si encontró coincidencia
  } catch (error) {
    console.error("Error al validar login", error)
    throw error
  }
}