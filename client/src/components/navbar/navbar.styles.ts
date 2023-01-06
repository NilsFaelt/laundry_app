import styled from "styled-components";
import * as headerStyles from "../header/header.styles";
import * as globalStyles from "../../styles/globalStyles";
import { CiCalendarDate } from "react-icons/ci";
import { TfiBook } from "react-icons/tfi";
import { BsChatRightText } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { breakPoints } from "../../styles/breakPoints";
import { colors } from "../../styles/colors";

export const Container = styled(globalStyles.FlexedContainerRow)`
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  width: 100vw;
  height: clamp(75px, 7vh, 200px);
  box-shadow: 10px 10px 10px;
  z-index: 2;
  @media ${breakPoints.breakTwo} {
    left: 0.5vw;
    top: 20vh;
    width: 100px;
    height: 50vh;
    flex-direction: column;
    border-radius: 5px;
  }
`;

export const Calendar = styled(CiCalendarDate)`
  transform: scale(3.2);
`;
export const MyBookings = styled(TfiBook)`
  transform: scale(2.2);
`;
export const Forum = styled(BsChatRightText)`
  transform: scale(2.2);
`;

export const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const ShowBookingDiv = styled.div`
  position: absolute;
  right: 15px;
  top: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  z-index: 3;
  background-color: red;
`;
