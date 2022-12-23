import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as globalStyles from "../../../styles/globalStyles";
import * as loginStyles from "../../login/login/login.styles";

export const Container = styles(globalStyles.FlexedContainerCollumn)`
position:absolute;
z-index:3;
width:clamp(300px, 50vw, 50vw);
box-shadow:10px 10px 10px;
height:auto;
border-radius:5px;
padding:5vw;
background-color:${colors.primary};
`;

export const P = styles.p`
font-size:25px;
text-align:center;
color:${colors.white}
`;
export const Pdate = styles.p`
margin-top:5px;
font-size:15px;
text-align:center;
color:${colors.white}
`;

export const DangerBtn = styles(globalStyles.DangerBUtton)`
margin-top:2vh;`;
export const PstvBtn = styles(globalStyles.MainBtn)`
margin-top:2vh;
background-color:${colors.positive}`;

export const Btn = styles(loginStyles.Btn)`
margin-top:2vh;
`;
export const BtnDiv = styles.div`
display:flex;
gap:4vw;`;
