import { keyframes } from "styled-components";
import styled from "styled-components";

const growAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Img = styled.img`
    border-radius: 50%;
    opacity: 0.9;
    width:450px;
    height:450px;
    @media (max-width: 850px){
    width:280px;
    height:280px;
    margin-top: 5px;
   }
   &:hover {
    animation: ${growAnimation} 0.3s forwards;
    opacity: 1;
  }
`;

export const ContainerText = styled.div`
    display:flex;
    flex-basis:50%;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:100vh;
    background: rgba(21, 21, 21, 0.7);
    @media (max-width: 768px) {
    flex-basis: 100%;
    min-width: auto;
    height: auto;
  }
`;

export const ContainerImg = styled.div`
    display:flex;
    flex-basis: 50%;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height:100vh;
    @media (max-width: 768px) {
    flex-basis: 100%;
    min-width: auto;
    height: auto;
  }
`;

export const Name = styled.h1`
    color: rgba(21, 180, 189, 1);
    text-shadow: 2px 2px 4px rgba(30, 255, 60, 0.4);
`;

export const Detalle = styled.h2`
    color: rgba(30, 255, 60, 1);
    text-shadow: 2px 2px 4px rgba(21, 180, 189, 0.6);;
`;

