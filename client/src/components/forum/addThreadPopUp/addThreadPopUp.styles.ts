import styles from "styled-components";
import * as globalStyles from "../../../styles/globalStyles";
import { AiFillCloseCircle } from "react-icons/ai";

export const container = styles(globalStyles.FlexedContainerCollumn)`
position: absolute;
width:clamp(250px, 50%, 500px);
top: 55%;
left: 50%;
padding:20px 50px 20px 50px;
background-color:black;
transform: translate(-50%, -50%);
border-radius:5px;
box-shadow:3px 3px 3px;
z-index:1;
`;
export const title = styles(globalStyles.ThhirdTitle)`
color:white;`;
export const Btn = styles(globalStyles.MainBtn)`
align-self:center;
margin-top:20px;`;

export const Form = styles.form`
display:flex;
flex-direction:column;
// align-items:center;
width:100%
`;

export const Label = styles(globalStyles.Label)`
font-size:15px;
margin-top:10px;
color:white;
`;
export const Input = styles(globalStyles.Input)`
width:100%;
`;

export const Close = styles(AiFillCloseCircle)`
position:absolute;
left:20px;
top:3vh;
color:white;
transform:scale(2.5);
cursor:pointer
`;
