import React,{createContext, useState} from "react";

export const TareasContext = createContext();

const TareasProvider = (props) => {
    const [tareas, guardarTareas] = useState([]);

    return (
        <TareasContext.Provider
            value = {{
                tareas,
                guardarTareas
            }}
        >
            {props.children}
        </TareasContext.Provider>
    )
}


export default TareasProvider;