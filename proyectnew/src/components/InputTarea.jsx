import "../styles/InputTarea.css"
import { postData } from "../services/Userservices.js"
import { useState } from "react"

const InputTarea = () => {
  const [NombreTarea, setTarea] = useState('')

  async function agregarTarea() {
    const objTarea = {
      NombreTarea: NombreTarea
    }
    try {
      const respuesta = await postData("tareas", objTarea);
      console.log("agregarTarea", respuesta);
      setTarea("");
    } catch (error) {
      console.log("Error al agregar tareas nuevas", error);
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setTarea(e.target.value)} />
      <button onClick={agregarTarea}>Agregar</button>
    </div>

  )

}
export default InputTarea


