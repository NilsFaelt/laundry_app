import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { FlexedContainerCollumn } from "../../../../styles/globalStyles";
import { FlexedContainerRow } from "../../../../styles/globalStyles";
import { CloseMail } from "../../../mailPopUp/readMailPopUp/readMailPopUp.style";

export const Container = styled(FlexedContainerCollumn)`
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 3;
  width: clamp(300px, 30vw, 50vw);
  box-shadow: 10px 10px 10px;
  height: 150px;
  border-radius: 5px;
  padding: 5vw;
  background-color: rgba(22, 22, 22, 0.96);
  border: 1px solid white;
`;

export const Title = styled.h2`
  color: ${colors.white};
  margin-bottom: 50px;
  text-align: center;
  font-size: 16px;
`;

export const BtnDiv = styled(FlexedContainerRow)`
  justify-content: space-between;
  width: 100%;
`;

export const Close = styled(CloseMail)`
  top: 0px;
  color: white;
`;
