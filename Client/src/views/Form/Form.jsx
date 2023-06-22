import React, { useState } from "react";
import validation from "../../functions/validation";
import { Container, LabelText, StyledImg, StyledButton, StyledInput, PError } from "./styledForm";
import LogoRaM from "../../components/Auxiliares/LogoRaM.png"

function Form(props){

    const [ userData, setUserData ] = useState({
        email: "",
        password: ""
    });

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) =>{
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.login(userData);
    }


    return (
        <div>
            <Container onSubmit={handleSubmit}>
                <StyledImg src={LogoRaM} alt="Logo de Rick and Morty"/>
                <LabelText>Correo Electrónico:</LabelText>
                <StyledInput type="email" name="email" value={userData.email} onChange={handleChange}/>
                <PError>{errors.email}</PError>
                <LabelText>Contraseña:</LabelText>
                <StyledInput type="password" name="password" value={userData.password} onChange={handleChange}/>
                <PError>{errors.password}</PError>
                <StyledButton type="submit">Submit</StyledButton>
            </Container>
        </div>
    )
}

export default Form