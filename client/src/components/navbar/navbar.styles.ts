import styles from "styled-components";
import * as headerStyles from "../header/header.styles";
import * as globalStyles from "../../styles/globalStyles";
import { CiCalendarDate } from "react-icons/all";
import { TfiBook } from "react-icons/all";
import { BsChatRightText } from "react-icons/all";
import { NavLink } from "react-router-dom";

export const Container = styles(globalStyles.FlexedContainerRow)`
position:fixed;
bottom:0;
justify-content:space-around;
width:100vw;
height:clamp(80px, 8vh, 200px);
box-shadow:0px 0px 10px;
`;

export const Calendar = styles(CiCalendarDate)`
transform:scale(3.5);
`;
export const MyBookings = styles(TfiBook)`
transform:scale(2.5);
`;
export const Forum = styles(BsChatRightText)`
transform:scale(2.5);
`;

export const Link = styles(NavLink)`
text-decoration:none;
color:black;
`;
