import styled from "styled-components";
import * as globalStyles from "../../../styles/globalStyles";
import { AiFillCloseCircle } from "react-icons/ai";
import { colors } from "../../../styles/colors";

export const container = styled(globalStyles.FlexedContainerCollumn)`
  position: absolute;
  width: clamp(250px, 50%, 500px);
  top: 55%;
  left: 50%;
  padding: 20px 50px 20px 50px;
  background-color: ${colors.primaryDark};
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 3px 3px 3px;
  z-index: 1;
  border: 1px solid black;
`;
export const title = styled(globalStyles.ThhirdTitle)`
  color: white;
`;
export const Btn = styled(globalStyles.MainBtn)`
  align-self: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // align-items:center;
  width: 100%;
`;

export const Label = styled(globalStyles.Label)`
  font-size: 15px;
  margin-top: 10px;
  color: ${colors.showActiveLink};
`;
export const Warning = styled(globalStyles.Label)`
  font-size: 15px;
  margin-top: 10px;
  color: ${colors.danger};
`;
export const Input = styled(globalStyles.Input)`
  width: 100%;
`;

export const Close = styled(AiFillCloseCircle)`
  position: absolute;
  left: 20px;
  top: 3vh;
  color: white;
  transform: scale(2.5);
  cursor: pointer;
  &:hover {
    color: ${colors.danger};
  }
`;
