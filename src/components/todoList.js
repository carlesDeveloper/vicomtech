import React, {useState, useContext} from "react";
import { TareasContext } from "../context/listContext";

function Todolist (){

    const {tareas, guardarTareas} = useContext(TareasContext);

    const doneTarea = (e) => {
        
    }
    return(
        <React.Fragment>
            <h3>ToDo List</h3>
            {tareas.map(tarea => {
                return(
                    <div key={tareas.tarea}>
                       <p>{tarea.tarea}</p>
                        <p>La descripcion es: {tarea.description}</p>
                        <p>El estado es {tarea.estado}</p> 
                        <button onClick={doneTarea}>DONE</button>
                    </div>
                    
                )
                
            })}
            
        </React.Fragment>
    )
}

export default Todolist;