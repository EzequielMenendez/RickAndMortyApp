import React from "react";

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /\d/;
function validation(inputs){
    let errors = {};

    if(!inputs.email){
        errors.email = "*Este campo no puede estar vacio"
    }
    if(!regexEmail.test(inputs.email)){
        errors.email = "*Este campo tiene que ser un mail valido"
    }
    if(inputs.email.length > 35){
        errors.email = "*Este campo no puede tener mas de 35 caracteres"
    }
    if(!passwordRegex.test(inputs.password)){
        errors.password = "*Este campo debe contener almenos 1 numero"
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "*Este campo debe tener una longitud entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation