
const Tarea = ({titulo, eliminarTarea,editarTareas}) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <button onClick={eliminarTarea}>Eliminar🗑️</button>
      <button onClick={editarTareas}>Editar📝</button>
     

    </div>
  );
};



export default Tarea
