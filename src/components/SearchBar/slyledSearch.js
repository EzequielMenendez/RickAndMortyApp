import styled, { keyframes } from "styled-components";


export const Input = styled.input`
    background: rgba(38, 45, 39, 1);
    border-radius: 5px;
    margin: 10px;
    width: 270px;
    height: 30px;
    font-family: cursive;
    font-weight: bold;
    color: rgba(21, 180, 189, 1);
`;

const growAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
`;

export const Button = styled.button`
    width: 130px;
    height: 30px;
    border-radius: 5px;
    background: rgba(38, 45, 39, 1);
    font-family: cursive;
    font-weight: bold;
    color: rgba(21, 180, 189, 1);
    &:hover {
    cursor: pointer;
    animation: ${growAnimation} 0.3s forwards;
  }
`;