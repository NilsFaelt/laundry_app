import styles from "styled-components";
import * as globalStyles from "../../styles/globalStyles";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";

export const Container = styles(globalStyles.FlexedContainerRow)`
padding-top:20vh;
align-items:flex-start;
width:100vw;
height:120vh;
background-image:url(${laundryImg});
`;

export const CalendarWrapper = styles(globalStyles.FlexedContainerRow)`
width:auto;
height:auto;
background-color:${colors.primary};
padding:5vw;
border-radius:5px;
box-shadow:10px 10px 10px;
`;
