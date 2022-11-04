import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as loginStyles from "../../login/login/login.styles";

export const Container = styles(loginStyles.Container)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height:auto;
margin-top:12vh;
margin-bottom:10vh;
padding-bottom:5vh;
z-index:1;
background-color:rgba(22, 22, 22, 1)
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
