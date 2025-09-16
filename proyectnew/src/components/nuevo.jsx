import React from 'react'

async function ediitarTareas() {
    const objTarea = {
      NombreTarea: NombreTarea
    }
    try {
      const respuesta = await postData("tareas", objTarea);
      console.log("editarTareas", respuesta);
      setTarea("");
    } catch (error) {
      console.log("Error al editar tareas", error);
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setTarea(e.target.value)} />
      <button onClick={ediitarTareasTarea}>editarTareas</button>
    </div>

  )


export default nuevo
