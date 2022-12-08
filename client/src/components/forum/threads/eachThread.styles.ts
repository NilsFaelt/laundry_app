import styles from "styled-components";
import { colors } from "../../../styles/colors";
import * as gloalStyles from "../../../styles/globalStyles";

export const Container = styles(gloalStyles.FlexedContainerCollumn)`
width:clamp(50px, 100%, 90%);
height:auto;
margin-top:10px;
padding:15px;
border-radius:5px;
box-shadow:3px 3px 3px;
cursor:pointer;
&:hover{
    transition:0.2s;
    background-color:${colors.primary};
    text-decoration:underline 1px solid   ${colors.activePositive};
    border:1px solid white;
  }
  &:active{
    transition:0.2s;
    background-color:${colors.primary};
    box-shadow:0px 0px 0px  white;
    text-decoration:underline 1px solid   ${colors.activePositive};
  
  }
`;

export const Title = styles.h2`
font-size:15px;
color:white;
`;
export const Text = styles.p``;
