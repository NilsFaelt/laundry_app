import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import * as globalStyles from "../../styles/globalStyles";
import * as loginStyles from "../login/login/login.styles";
import { FiRefreshCcw } from "react-icons/fi";

export const BackgroundContainer = styles.div`
width:100vw;
min-height:170vh;
background-image:url(${laundryImg});
`;

export const UserContainer = styles(loginStyles.Container)`
position:relative;
max-height:70vh;
margin-top:20vh;
margin-bottom:20vh;
padding-bottom:5vh;
overflow:scroll;
`;
export const DisplayUserContainer = styles.div`
height:100%;
padding-bottom:5vh;
overflow:scroll;
box-shadow:0px 0px 0px;
background-color:transparent;
`;

export const Label = styles(globalStyles.Label)`
margin-top:3vh;
color:white;`;
export const Input = styles(globalStyles.Input)`
`;
export const P = styles.p`
text-decoration:underline;
font-size:20px;
color:white;
margin-top:3vh;
&:hover{
    cursor:pointer;
    color:${colors.showActiveLink}
}
`;
export const Error = styles.p`
font-size:15px;
color:${colors.danger};
`;

export const Refresh = styles(FiRefreshCcw)`
position:absolute;
right:20px;
top:3vh;
color:white;
transform:scale(1.6);
cursor:pointer;
&:hover{
    cursor:pointer;
    color:${colors.hover};
    }
`;
