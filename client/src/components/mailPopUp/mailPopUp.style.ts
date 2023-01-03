import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import * as globalStyles from "../../styles/globalStyles";
import { AiOutlineRollback } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { SlPencil } from "react-icons/sl";
import { colors } from "../../styles/colors";

export const Container = styles.div`
z-index:3;
position: absolute;
top: 50%;  
left: 50%; 
transform: translate(-50%, 10%);
display:flex;
flex-direction:column;
align-items:center;
width:clamp(330px, 70vw, 800px);
height:70vh;
padding:20px;
background-color:grey;
border-radius:5px;
box-shadow:10px 10px 10px;
border:1px solid "black";
`;

export const Title = styles.h2`
font-size:16px;
margin-top:10px;
color:${colors.white}
`;
export const ClickableTitle = styles.h2`
font-size:16px;
margin-top:20px;
color:${colors.white};
cursor:pointer;
text-decoration:underline;
`;
export const P = styles.p`
font-size:14px;
font-weight:bolder;
margin-top:8px;
margin-left:8px;
color:black;
cursor:pointer;
`;

export const Form = styles.form`
margin-top:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Label = styles.label`
align-self:flex-start;
margin-top:10px;
color:white;
font-size:12px`;
export const LabelWarning = styles.label`

margin-top:10px;
color:${colors.activeDanger};
font-size:16px`;

export const Input = styles(globalStyles.Input)`
width:70%;
border-radius:5px;
border:1px solid black;
margin-top:10px;
padding:1px;
font-size:14px;`;

export const Btn = styles(globalStyles.MainBtn)`
margin-top:15px;
box-shadow:1px 1px 1px black;
`;

export const Back = styles(AiOutlineRollback)`
position:absolute;
left:20px;
color:white;
transform:scale(2);
&:hover{
cursor:pointer;
color:${colors.hover};
};`;
export const Pen = styles(SlPencil)`
position:absolute;
right:25px;
color:white;
transform:scale(1.7);
&:hover{
cursor:pointer;
color:${colors.hover};
};`;
export const Mail = styles(TfiEmail)`
color:white;
position:absolute;
right:75px;
transform:scale(2);
&:hover{
cursor:pointer;
color:${colors.hover};
};`;

export const MailContainer = styles.div`
margin-top:50px;
width:clamp(300px, 30vw, 500px);
height:80%;
padding:10px 10px 10px 10px;
`;
export const TextArea = styles.textarea`
width:100%;
border-radius:5px;
height: 30vh;
border:1px solid black;
margin-bottom:20px;
`;
export const ShowMailAdresses = styles.div`
z-index:4;
position: absolute;
bottom:-100px;
min-width:50%;
border-radius:5px;
border:1px solid black;
padding:1px;
height:150px;
background-color:white;
overflow:scroll;
font-size:14px;`;
