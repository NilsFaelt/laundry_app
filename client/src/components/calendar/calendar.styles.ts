import styled from "styled-components";
import * as globalStyles from "../../styles/globalStyles";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";

export const Container = styled(globalStyles.FlexedContainerRow)`
  padding-top: 20vh;
  padding-bottom: 20vh;
  align-items: flex-start;
  width: 100vw;
  height: 120vh;
  background-image: url(${laundryImg});
`;

export const CalendarWrapper = styled(globalStyles.FlexedContainerCollumn)`
  position: relative;
  width: auto;
  height: auto;
  background-color: ${colors.primary};
  padding: calc(20px + 2vw);
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
`;
export const TimesWrapper = styled(globalStyles.FlexedContainerCollumn)`
  width: 250px;
  margin-left: 20px;
  background-color: transparent;
`;

export const Title = styled.h2`
  margin-top: 2vh;
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
  span {
    color: ${colors.showActiveLink};
  }
`;
export const ChooseTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const UserMenu = styled(globalStyles.FlexedContainerCollumn)`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 10%);
  top: 70px;
  right: 0px;
  gap: 5px;
  padding: 5px;
  height: max-conent;
  width: max-content;
  border-radius: 5px;
  background-color: ${colors.primary};
  box-shadow: 10px 10px 10px black;
  animation-duration: 0s;
  animation-fill-mode: forwards;
`;

export const PostsLink = styled.div`
  width: 120px;
  padding: 15px;
  border-bottom: 1px solid black;
  border-radius: 5px;
  font-size: 15px;
  background-color: grey;
  color: ${colors.primaryText};
  text-decoration: none;
  animation-duration: 0s;
  animation-fill-mode: forwards;
  &:hover {
    transition: 0.2s;
    background-color: ${colors.primary};
    text-decoration: underline 1px solid ${colors.activePositive};
    border: 1px solid white;
    cursor: pointer;
  }
  &:active {
    transition: 0.2s;
    background-color: ${colors.primary};
    box-shadow: 0px 0px 0px white;
    text-decoration: underline 1px solid ${colors.activePositive};
  }
`;
