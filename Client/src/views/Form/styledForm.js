import styled, { keyframes } from "styled-components";

export const Container = styled.form`
    background: rgba(21, 21, 21, 0.8);
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 550px;
    height: 100vh;
    margin: 0 auto;
`;

export const StyledImg = styled.img`
    margin-top: -80px;
    max-width: 330px;
    @media (max-width: 750px){
      max-width: 260px;
    }
`;

export const LabelText = styled.label`
    font-family: cursive;
    font-size: 20px;
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

export const StyledButton = styled.button`
    font-family: cursive;
    width: 120px;
    height: 30px;
    background: rgba(38, 45, 39, 1);
    color: rgba(21, 180, 189, 1);
    font-size: 17px;
    &:hover {
    cursor: pointer;
    animation: ${growAnimation} 0.3s forwards;
  }
`;

export const StyledInput = styled.input`
    background: rgba(38, 45, 39, 1);
    border-radius: 5px;
    margin: 10px;
    width: 270px;
    height: 30px;
    font-family: cursive;
    font-weight: bold;
    color: rgba(21, 180, 189, 1);
`;

export const PError = styled.p`
    color: red;
    font-family: cursive;
`;