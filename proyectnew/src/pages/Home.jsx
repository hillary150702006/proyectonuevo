import InputTarea from '../components/InputTarea'
import Tarea from '../components/Tarea'
import { getData } from '../services/Userservices.js'
import "../styles/InputTarea.css"
import ListaTareas from '../components/ListaTareas.jsx'
import { useState,useEffect } from 'react'
import Inicio from '../components/inicio.jsx'

const Home = () => {

  const [nuevasTareas, setNuevasTareas] = useState([]);

    useEffect(() => {
      const fecthTareas = async function () {
        try {
          const tareasTraidas = await getData("tareas");
          console.log(tareasTraidas);
          
          setNuevasTareas(tareasTraidas);
        } catch (error) {
          console.error("Error al ver tarea", error);
        }
      };
    fecthTareas();
    }, []);
  return (
    <div>
      <Inicio/>
        <InputTarea/>
        <Tarea/>
         <ListaTareas tareas={nuevasTareas}/>   
        

    </div>
  )
}
export default Home
