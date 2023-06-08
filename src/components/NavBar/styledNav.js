import { keyframes } from "styled-components";
import styled from "styled-components";

export const NavContainer = styled.div`
    background-color: rgba(47, 140, 17, 1);
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Title = styled.img`
    width: 350px;
    height: 120px;
    @media (max-width: 740px) {
    width: 290px;
    height: 100px;
  }
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