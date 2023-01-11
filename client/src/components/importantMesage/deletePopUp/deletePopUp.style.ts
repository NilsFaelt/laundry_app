import styled from "styled-components";
import * as globalStyles from "../../../styles/globalStyles";
import { colors } from "../../../styles/colors";
export const container = styled(globalStyles.FlexedContainerCollumn)`
  position: absolute;
  width: clamp(250px, 50%, 500px);
  top: 30%;
  left: 50%;
  padding: 20px 50px 20px 50px;
  background-color: ${colors.primary};
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 3px 3px 3px;
  z-index: 1;
`;

export const P = styled.p`
  color: white;
`;
export const Pclick = styled.p`
  color: white;
  text-decoration: underline ${colors.showActiveLink};
  margin-top: 15px;
  cursor: pointer;
`;
export const DangerBtn = styled(globalStyles.DangerBUtton)`
  margin-top: 2vh;
`;

export const PstvBtn = styled(globalStyles.MainBtn)`
  margin-top: 2vh;
  background-color: ${colors.positive};
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 4vw;
`;

export const MessageTitle = styled.h2`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
  color: ${colors.showActiveLink};
`;

export const PFrom = styled.p`
  color: ${colors.showActiveLink};
  font-size: 18px;
  margin-top: 10px;
  line-break: auto;
`;
