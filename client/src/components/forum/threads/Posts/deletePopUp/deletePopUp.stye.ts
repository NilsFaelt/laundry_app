import styles from "styled-components";
import * as globalStyles from "../../../../../styles/globalStyles";
import { AiFillCloseCircle } from "react-icons/ai";
import { colors } from "../../../../../styles/colors";

export const container = styles(globalStyles.FlexedContainerCollumn)`
position: absolute;
width:clamp(250px, 50%, 500px);
top: 55%;
left: 50%;
padding:20px 50px 20px 50px;
background-color:${colors.primary};
transform: translate(-50%, -50%);
border-radius:5px;
box-shadow:3px 3px 3px;
z-index:1;
`;
export const P = styles.p`
color:white`;
export const DangerBtn = styles(globalStyles.DangerBUtton)`
margin-top:2vh;`;

export const PstvBtn = styles(globalStyles.MainBtn)`
margin-top:2vh;
background-color:${colors.positive}`;

export const BtnDiv = styles.div`
display:flex;
gap:4vw;`;
