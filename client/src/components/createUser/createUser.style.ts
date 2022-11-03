import styles from "styled-components";
import { colors } from "../../styles/colors";
import * as loginStyles from "../login/login/login.styles";

export const Container = styles(loginStyles.Container)`
height:auto;
margin-top:20vh;
margin-bottom:20vh;
padding-bottom:5vh;
`;
export const Title = styles(loginStyles.Title)``;
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
export const Btn = styles(loginStyles.Btn)`
margin-top:3vh;
`;
export const Form = styles(loginStyles.Form)``;

export const P = styles.p`
color:${colors.danger};
font.size:12px;
`;
