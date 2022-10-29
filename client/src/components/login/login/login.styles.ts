import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as globalStyles from "../../../styles/globalStyles";

export const Container = styles(globalStyles.FlexedContainerCollumn)`
margin:0 auto;
position:absolute;
top:20vh;
width:clamp(380px, 30vw, 700px);
height:300px;
justify-content:flex-start;
gap:3vh;
background-color:${colors.primary};
border-radius:5px;
box-shadow:3px 3px 3px;
`;

export const Title = styles(globalStyles.SecondaryTitle)`
margin-top:5vh;`;

export const Form = styles.form`
margin: 0 auto;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:2vh;
`;
export const Input = styles(globalStyles.Input)`
font-size:16px;`;
export const Label = styles(globalStyles.Label)``;

export const Btn = styles(globalStyles.MainBtn)``;
