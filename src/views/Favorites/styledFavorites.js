import styled from "styled-components";
import { keyframes } from "styled-components";

const growAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
`;

export const Select = styled.select`
    width: 120px;
    height: 30px;
    border-radius: 5px;
    margin-left:10px;
    margin-top:10px;
    background: rgba(38, 45, 39, 1);
    font-family: cursive;
    font-weight: bold;
    color: rgba(21, 180, 189, 1);
    &:hover {
    cursor: pointer;
    animation: ${growAnimation} 0.3s forwards;
  }
`;