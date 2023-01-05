import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import * as globalStyles from "../../../../styles/globalStyles";

export const container = styled(globalStyles.FlexedContainerCollumn)`
  position: absolute;
  width: clamp(250px, 50%, 500px);
  top: 55%;
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
