import styles from "styled-components";
import * as loginStyles from "../../login/login/login.styles";

export const Container = styles(loginStyles.Container)`
position:absolute;
top: 65%;
left: 50%;
transform: translate(-50%, -50%);
height:auto;
margin-top:20vh;
margin-bottom:20vh;
padding-bottom:5vh;
background-color:black;
border:1px solid white;
`;
export const Title = styles(loginStyles.Title)``;
export const Input = styles(loginStyles.Input)``;

export const Select = styles.select`
width:200px;
height:30px;
font-size:16px;
font-family: 'Montserrat', sans-serif;
`;
export const Option = styles.option``;
export const Btn = styles(loginStyles.Btn)`
margin-top:3vh;
`;
export const Form = styles(loginStyles.Form)``;
