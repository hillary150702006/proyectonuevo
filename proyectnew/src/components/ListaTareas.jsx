import { deleteData } from "../services/Userservices"
import Tarea from "./Tarea"


const ListaTareas = ({ tareas }) => {

  async function eliminarTarea(id) {
    const eliminarTarea = await deleteData("tareas", id);
    console.log(eliminarTarea);
  }

  return (
    <div>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id} 
          titulo={tarea.NombreTarea}
          id={tarea.id}
          onDelete={() => eliminarTarea(tarea.id)}
        />
      ))}
    </div>
  );
};

export default ListaTareas

 
