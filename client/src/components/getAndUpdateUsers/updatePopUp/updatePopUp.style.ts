import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as loginStyles from "../../login/login/login.styles";
import { AiFillCloseCircle } from "react-icons/ai";
import * as globalStyles from "../../../styles/globalStyles";

export const Container = styles(loginStyles.Container)`
position: absolute;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
height:auto;
margin-top:27vh;
margin-bottom:10vh;
padding-bottom:5vh;
gap:0vh;
z-index:1;
background-color:rgba(22, 22, 22, 1);
box-shadow:10px 10px 10px;
`;
export const Title = styles(loginStyles.Title)``;
export const UpdateTitle = styles(loginStyles.Title)`
margin:0;
`;
export const Lable = styles.label`
align-self:flex-start;
margin-left:18px;
color:white;
font-size:12px`;
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

export const DangerBtn = styles(globalStyles.DangerBUtton)``;
export const PstvBtn = styles(globalStyles.MainBtn)`
background-color:${colors.positive}`;
export const Form = styles(loginStyles.Form)``;
export const Btn = styles(loginStyles.Btn)`
margin-top:2vh;
`;
export const BtnDiv = styles.div`
display:flex;
gap:4vw;`;
export const P = styles.p`
color:${colors.danger};
font.size:12px;
`;
export const PGreen = styles.p`
color:${colors.white};
font.size:12px;
`;
export const Pdel = styles.p`
margin-top:2vh;
margin-bottom:2vh;
color:${colors.danger};
font.size:12px;
cursor:pointer;
`;

export const Close = styles(AiFillCloseCircle)`
position:absolute;
left:20px;
top:3vh;
color:white;
transform:scale(2.5);
cursor:pointer
`;
