import React, {useContext, useState} from "react";
import "../assets/css/form.css"
import { TareasContext } from "../context/listContext";

function Formulario (){
    const {tareas, guardarTareas} = useContext(TareasContext);
    const [tarea, setTarea] = useState("");

    const changeTitle = (e) => {
        const nuevaTarea = e.target.value
        setTarea(nuevaTarea)
        
    }

    const addTarea = (e) => {
        e.preventDefault();
        let nuevaTarea = {
            tarea: tarea,
            description: "",
            estado: "pendiente"
        }
        guardarTareas([
          ...tareas,
          nuevaTarea  
        ])
    }
    return(
        <React.Fragment>
            <div className="form">
            <form onSubmit={addTarea}>
                <label>
                    Insert item:
                    <input 
                        type="text" 
                        name="tarea" 
                        placeholder="Write here..."
                        onChange={changeTitle}
                        value={tarea} />
                </label>
                <input type="submit" value="AÑADIR" />
            </form>
            </div>
        </React.Fragment>
    )
}

export default Formulario;