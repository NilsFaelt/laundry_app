import { colors } from "./colors";
import styled from "styled-components";

export const MainTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: calc(30px + 0.5vw);
  color: white;
`;
export const SecondaryTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: calc(20px + 0.5vw);
  color: white;
`;
export const ThhirdTitle = styled.h2``;

export const FlexedContainerRow = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FlexedContainerCollumn = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: calc(12px + 0.5vw);
`;
export const Input = styled.input`
  margin: 0 auto;
  width: 90%;
  height: 25px;
  font-family: "Montserrat", sans-serif;
  font-size: calc(12px + 0.2vw);
`;

export const MainBtn = styled.button`
  width: clamp(90px, 10vw, 120px);
  height: clamp(30px, 6vh, 60px);
  font-size: calc(10px + 0.5vw);
  background-color: ${colors.grey};
  border: none;
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: 1px 1px 1px black;
  color: white;
  &:hover {
    transition: 0.2s;
    background-color: ${colors.hover};
    border: none;
    color: black;
    box-shadow: 1.5px 1.5px 1.5px black;
  }
  &:active {
    box-shadow: 0px 0px 0px;
    background-color: ${colors.activePositive};
    border: 2px solid ${colors.borderBtn};
    color: black;
  }
`;

export const DangerBUtton = styled(MainBtn)`
  background-color: ${colors.danger};
  &:hover {
    transition: 0.2s;
    background-color: ${colors.hover};
    border: none;
    color: black;
    box-shadow: 1.5px 1.5px 1.5px black;
  }
  &:active {
    box-shadow: 0px 0px 0px;
    background-color: ${colors.activePositive};
    border: 2px solid ${colors.borderBtn};
    color: black;
  }
`;
