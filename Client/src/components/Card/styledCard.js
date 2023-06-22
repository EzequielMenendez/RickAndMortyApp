import styled, { keyframes } from "styled-components";

const growAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.03);
  }
`;

export const Container = styled.div`
    margin: 18px;
    border-radius: 12px;
    padding: 0 5px;
    background: rgba(47, 140, 17, 0.9);
    box-shadow: 0 0 15px rgba(14, 250, 208, 0.91);
    width: 300px;
    height: 414px;
    @media (max-width: 750px){
      background: rgba(47, 140, 17, 1);
    }
    overflow: hidden;
   &:hover {
    background: rgba(47, 140, 17, 1);
    animation: ${growAnimation} 0.3s forwards;
  }
`;

export const Imagen = styled.img`
    border-radius: 50%;
    object-fit: cover;
    &:hover {
    cursor: pointer;
    animation: ${growAnimation} 0.3s forwards;
  }
`;

export const Button = styled.button`
    background: red;
    display:flex;
    margin-top: 3px;
    border-radius: 8px;

    &:hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
    animation: ${growAnimation} 0.3s forwards;
  }
`;

export const Text = styled.h2`
    font-size: 27px;
    color: rgba(21, 180, 189, 1);
    text-shadow: 2px 2px 4px rgba(30, 255, 60, 0.3);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FavoriteButton = styled.button`
  font-size: 17px;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
    animation: ${growAnimation} 0.3s forwards;
  }
`