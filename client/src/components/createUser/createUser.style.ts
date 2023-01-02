import styles from "styled-components";
import { colors } from "../../styles/colors";
import * as loginStyles from "../login/login/login.styles";
import * as globalStyles from "../../styles/globalStyles";

export const Container = styles(loginStyles.Container)`
height:auto;
margin-top:20vh;
margin-bottom:20vh;
padding-bottom:5vh;
box-shadow:10px 10px 10px;
`;
export const Title = styles(loginStyles.Title)``;
export const Label = styles.label`
align-self:flex-start;
margin-left:18px;
color:white;
font-size:12px;
`;

export const Input = styles(loginStyles.Input)`
font-family:serif;
font-size:16px;
`;
export const Select = styles.select`
width:200px;
height:30px;
font-size:16px;
font-family:serif;

`;
export const Option = styles.option`
`;
export const BtnDiv = styles.div`
display:flex;
gap:4vw;`;
export const Btn = styles(loginStyles.Btn)`
margin-top:3vh;
`;

export const DangerBtn = styles(globalStyles.DangerBUtton)``;
export const PstvBtn = styles(globalStyles.MainBtn)`
background-color:${colors.positive}`;
export const Form = styles(loginStyles.Form)``;

export const P = styles.p`
color:${colors.danger};
font.size:12px;
`;
export const PNeutral = styles.p`
color:${colors.white};
font.size:12px;
`;
