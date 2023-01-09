import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import * as globalStyles from "../../styles/globalStyles";
import * as loginStyles from "../login/login/login.styles";
import { FiRefreshCcw } from "react-icons/fi";

export const BackgroundContainer = styled.div`
  width: 100vw;
  min-height: 170vh;
  background-image: url(${laundryImg});
`;

export const UserContainer = styled(loginStyles.Container)`
  position: relative;
  max-height: 70vh;
  margin-top: 20vh;
  margin-bottom: 20vh;
  padding-bottom: 5vh;
  overflow: scroll;
`;
export const DisplayUserContainer = styled.div`
  height: 100%;
  padding-bottom: 5vh;
  overflow: scroll;
  box-shadow: 0px 0px 0px;
  background-color: transparent;
`;

export const Label = styled(globalStyles.Label)`
  margin-top: 3vh;
  margin-bottom: vh;
  color: white;
`;
export const Input = styled.input`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 0px;
  border-radius: 15px;
  border: 1px solid black;
  padding: 1vh;
  &:focus {
    border: 1px solid black;
    outline: none;
  }
  @media (max-width: 300px) {
    margin-top: 100px;
  }
`;

export const P = styled.p`
  text-decoration: underline;
  font-size: 20px;
  color: white;
  margin-top: 3vh;
  &:hover {
    cursor: pointer;
    color: ${colors.showActiveLink};
  }
`;
export const Error = styled.p`
  font-size: 15px;
  color: ${colors.danger};
`;

export const Refresh = styled(FiRefreshCcw)`
  position: absolute;
  right: 20px;
  top: 3vh;
  color: white;
  transform: scale(1.6);
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;
