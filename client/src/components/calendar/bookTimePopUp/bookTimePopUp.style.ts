import styled from "styled-components";
import { colors } from "../../../styles/colors";
import * as globalStyles from "../../../styles/globalStyles";
import * as loginStyles from "../../login/login/login.styles";

export const Container = styled(globalStyles.FlexedContainerCollumn)`
  position: absolute;
  z-index: 3;
  width: clamp(300px, 30vw, 50vw);
  box-shadow: 10px 10px 10px;
  height: auto;
  border-radius: 5px;
  padding: 5vw;
  background-color: black;
  border: 1px solid white;
`;

export const P = styled.p`
  font-size: 25px;
  text-align: center;
  color: ${colors.white};
`;
export const Span = styled.span`
  color: ${colors.showActiveLink};
`;
export const Pdate = styled.p`
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
  color: ${colors.white};
`;

export const DangerBtn = styled(globalStyles.DangerBUtton)`
  margin-top: 2vh;
`;
export const PstvBtn = styled(globalStyles.MainBtn)`
  margin-top: 2vh;

  background-color: ${colors.positive};
`;

export const Btn = styled(loginStyles.Btn)`
  margin-top: 2vh;
`;
export const BtnDiv = styled.div`
  display: flex;
  gap: 4vw;
`;
