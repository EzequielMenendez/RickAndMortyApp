import { Container, Img, ContainerText, ContainerImg, Name, Detalle } from "./styledDetail";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const { id } = useParams();
    const [ character, setCharacter ] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    const { name, status, species, gender, origin, image } = character;
    return(
        <Container>
            <ContainerText>
                <Name>{name}</Name>
                <Detalle>{status}</Detalle>
                <Detalle>{species}</Detalle>
                <Detalle>{gender}</Detalle>
                <Detalle>{origin?.name}</Detalle>
            </ContainerText>
            <ContainerImg>
                <Img src={image} alt={name} />
            </ContainerImg>
        </Container>
    )
}
export default Detail