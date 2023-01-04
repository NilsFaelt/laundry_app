import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { FlexedContainerCollumn } from "../../../styles/globalStyles";

export const AllMailsContainer = styled(FlexedContainerCollumn)`
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  width: clamp(300px, 70vw, 800px);
  height: 50vh;
  background-color: ${colors.white};
  border-radius: 5px;
  border: 1px solid black;
  span {
    color: blue;
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const P = styled.p`
  margin-top: 5px;
  margin-left: 10px;
`;
