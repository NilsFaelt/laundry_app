import styled from "styled-components";
import { FlexedContainerCollumn } from "../../../../styles/globalStyles";
import { CloseMail } from "../../../mailPopUp/readMailPopUp/readMailPopUp.style";

export const Container = styled(FlexedContainerCollumn)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 3;
  width: clamp(300px, 30vw, 50vw);
  box-shadow: 10px 10px 10px;
  height: 200px;
  border-radius: 5px;
  padding: 5vw;
  background-color: black;
  border: 1px solid white;
`;

export const Close = styled(CloseMail)`
  top: 0px;
  color: white;
`;
