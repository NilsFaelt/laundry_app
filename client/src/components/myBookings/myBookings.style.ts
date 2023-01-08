import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import * as globalStyles from "../../styles/globalStyles";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-image: url(${laundryImg});
  padding-bottom: 30vh;
`;
export const Container = styled(globalStyles.FlexedContainerCollumn)`
  margin: 0 auto;
  margin-top: 20vh;
  width: clamp(300px, 50%, 500px);
  height: auto;
  background-color: ${colors.primary};
  padding: calc(20px + 2vw);
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
`;

export const Title = styled.h2`
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
`;
export const ChooseTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
