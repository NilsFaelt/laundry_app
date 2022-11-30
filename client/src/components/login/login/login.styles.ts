import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as globalStyles from "../../../styles/globalStyles";
import laundryImg from "../../../assets/img/laundry.png";

export const BackgroundContainer = styles.div`
width:100vw;
height:100vh;
background-image:url(${laundryImg});
`;

export const Container = styles(globalStyles.FlexedContainerCollumn)`
margin:0 auto;
margin-top:20vh;
width:clamp(380px, 30vw, 700px);
height:auto;
padding-bottom:3.5vh;
justify-content:flex-start;
gap:3vh;
background-color:${colors.primary};
border-radius:5px;
box-shadow:3px 3px 3px;
`;

export const Title = styles(globalStyles.SecondaryTitle)`
font-size:22px;
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
border-radius:5px;
border:1px solid black;
padding:1px;
font-size:14px;`;
export const Label = styles(globalStyles.Label)``;

export const P = styles.p`
color:${colors.danger};
font.size:12px;
`;

export const Btn = styles(globalStyles.MainBtn)`
margin-top:10px;
`;
