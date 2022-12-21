import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as gloalStyles from "../../../styles/globalStyles";
interface Props {
  margin: string;
}
export const Container = styles(gloalStyles.FlexedContainerRow)<Props>`
margin-top:${(props) => props.margin};
justify-content:space-between;
width:100%;
gap:10vw;
height:auto;
margin-top:10px;
padding:20px;
border-radius:5px;
box-shadow:3px 3px 3px;
cursor:pointer;
@media (max-width: 700px) {
  gap:2vw;
}
&:hover{
    transition:0.2s;
    background-color:${colors.primary};
    text-decoration:underline 1px solid   ${colors.activePositive};
    outline:1px solid white;
  }
  &:active{
    transition:0.2s;
    background-color:${colors.primary};
    box-shadow:0px 0px 0px  white;
    text-decoration:underline 1px solid   ${colors.activePositive};
  
  }
`;

export const Title = styles.h2`
flex-basis:0;
flex-grow:1;
max-inline-size: 100px;
overflow-wrap: break-word;
font-size:15px;
color:white;
color:${colors.showActiveLink}

`;
export const Date = styles.h2`
flex-basis:0;
flex-grow:1;
overflow-wrap: break-word;
font-size:15px;
color:white;

`;
export const Email = styles.h2`
flex-basis:0;
flex-grow:1;
overflow-wrap: break-word;
font-size:15px;
color:${colors.deepBlue}
`;

export const Text = styles.p``;
