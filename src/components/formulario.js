import React, {useState} from "react";
import "../assets/css/form.css"

function Formulario (){
    return(
        <React.Fragment>
            <div className="form">
                <label for="tarea">Insert item:</label>
                <input
                    name="tarea"
                    type="text"
                    placeholder="Write here..."
                 />

            </div>
        </React.Fragment>
    )
}

export default Formulario;