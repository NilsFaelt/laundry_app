import styles from "styled-components";
import * as globalStyles from "../../styles/globalStyles";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";

export const Container = styles(globalStyles.FlexedContainerRow)`
padding-top:20vh;
padding-bottom:20vh;
align-items:flex-start;
width:100vw;
height:120vh;
background-image:url(${laundryImg});
`;

export const CalendarWrapper = styles(globalStyles.FlexedContainerCollumn)`
width:auto;
height:auto;
background-color:${colors.primary};
padding:calc(20px + 2vw);
border-radius:5px;
box-shadow:10px 10px 10px;

`;
export const TimesWrapper = styles(globalStyles.FlexedContainerCollumn)`
width:250px;
margin-left:20px;
background-color:transparent;
`;

export const Title = styles.h2`
margin-top:2vh;
font-size:15px;
color:${colors.white};
text-align:center;
`;
