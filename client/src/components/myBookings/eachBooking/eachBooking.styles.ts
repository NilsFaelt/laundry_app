import styles from "styled-components";
import { colors } from "../../../styles/colors";
import { AiFillCloseCircle } from "react-icons/all";

export const container = styles.div`
border:1px solid white;
border-radius:5px;
align-self:center;
width:90%;
margin-top:5px;

`;

export const Title = styles.h2`
margin-top:1.5vh;
margin-bottom:1vh;
font-size:15px;
color:${colors.white};
text-align:center;
`;
export const TitleBooked = styles.h2`
margin-top:1vh;

margin-bottom:1vh;
font-size:15px;
color:${colors.danger};
text-align:center;
`;

export const Delete = styles(AiFillCloseCircle)`

left:20px;
top:3vh;
color:white;
transform:scale(2.5);
cursor:pointer
`;
