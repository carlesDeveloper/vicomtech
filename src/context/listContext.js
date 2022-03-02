import React,{createContext, useState} from "react";

export const tareasContext = createContext();

const TareasProvider = (props) => {
    const [tareas, guardarTareas] = useState({});

    return (
        <tareasContext.Provider
            value = {{
                tareas,
                guardarTareas
            }}
        >
            {props.children}
        </tareasContext.Provider>
    )
}


export default TareasProvider;