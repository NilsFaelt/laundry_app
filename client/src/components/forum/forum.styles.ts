import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import { AiOutlineRollback } from "react-icons/ai";
import * as globalStyles from "../../styles/globalStyles";

export const BackgroundContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${laundryImg});
  padding-bottom: 200px;
`;
export const Container = styled(globalStyles.FlexedContainerCollumn)`
  position: relative;
  margin: 0 auto;
  margin-top: 20vh;
  width: clamp(300px, 70%, 660px);
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
  span {
    color: ${colors.showActiveLink};
  }
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    margin-top: 100px;
  }
`;

export const Title = styled.h2`
  margin-top: 0vh;
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
`;
export const SecondaryTitle = styled.h4`
  margin-top: 0vh;
  margin-top: 1vh;
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
`;

export const Btn = styled(globalStyles.MainBtn)`
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 3px black;
`;

export const Label = styled(globalStyles.Label)``;

export const Back = styled(AiOutlineRollback)`
  position: absolute;
  left: 20px;
  color: white;
  transform: scale(2);
  cursor: pointer;
`;
