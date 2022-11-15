import styles from "styled-components";
import { colors } from "../../../styles/colors";

interface Props {
  cursor: string;
}
export const container = styles.div<Props>`
pointer-events: ${(props) => props.cursor};
cursor:${(props) => props.cursor};
border:1px solid white;
border-radius:5px;
align-self:center;
width:90%;
margin-top:5px;
&:hover{
    background-color:${(props) => props.color}
}
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
