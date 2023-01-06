import styled from "styled-components";
import { colors } from "../../../styles/colors";
import * as globalStyles from "../../../styles/globalStyles";

export const Container = styled(globalStyles.FlexedContainerCollumn)`
  margin: 0 auto;
  margin-top: 20vh;
  width: clamp(300px, 70%, 800px);
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const TreadsAndPoststContainer = styled(globalStyles.FlexedContainerRow)`
  margin: 0 auto;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  margin: 0;
  padding: 0;
  gap: 20px;
  @media (max-width: 500px) {
    height: 80%;
  }
`;

export const ThreadsContainerScroll = styled(
  globalStyles.FlexedContainerCollumn
)`
  margin: 0 auto;
  margin-bottom: 30px;
  min-width: 100px;
  height: 220px;
  background-color: transparent;
  padding: calc(20px + 2vw);
  padding-top: 20px;
  border-radius: 5px;
`;

export const ThreadsContaineWrapper = styled(
  globalStyles.FlexedContainerCollumn
)`
  margin: 0 auto;
  width: 100%;
  height: auto;
  background-color: transparent;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-top: 0vh;
  margin-bottom: 4vh;
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
`;
export const SecondaryTitle = styled.h2`
  font-size: 18px;
  color: ${colors.white};
  text-align: center;
`;

export const Btn = styled(globalStyles.MainBtn)`
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 3px black;
`;

export const ThreadsHeader = styled(globalStyles.FlexedContainerRow)`
  padding: calc(20px + 1vw);
  margin-top: 50px;
  background-color: ${colors.primary};
  border-radius: 5px;
  box-shadow: 3px 3px 3px black;
  margin-bottom: 30px;
  width: clamp(300px, 65%, 600px);
  justify-content: space-between;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  overflow-wrap: break-word;
  font-size: 15px;
  color: white;
  @media (max-width: 700px) {
    width: 55%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;
export const Input = styled(globalStyles.Input)`
  max-width: 500px;
  margin-top: 30px;
  margin-bottom: 0px;
  border-radius: 15px;
  border: 1px solid black;
  padding: 1vh;
  box-shadow: 3px 3px 3px;
  &:focus {
    border: 1px solid black;
    outline: none;
  }
  @media (max-width: 300px) {
    margin-top: 100px;
  }
`;
export const Label = styled(globalStyles.Label)``;
