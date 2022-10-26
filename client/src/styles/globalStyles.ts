import { colors } from "./colors";
import styles from "styled-components";

export const MainTitle = styles.h1``;
export const SecondaryTitle = styles.h2``;
export const ThhirdTitle = styles.h2``;

export const FlexedContainerRow = `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const FlexedContainerCollumn = `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const MainBtn = styles.button`
margin-top:10vh;
margin-left:10vh;
width:clamp(90px, 10vw, 120px);
height:clamp(30px, 6vh, 60px);
font-size:calc(10px + 0.5vw);
background-color:${colors.positive};
border:none;
border-radius:8px;
padding:5px;
cursor:pointer;
box-shadow: 1px 1px 1px;
&:hover{
    transition:0.2s;
    background-color:${colors.hover};
    border: none;
    color:white;
    box-shadow: 1.5px 1.5px 1.5px black; 

}
&:active{
    box-shadow: 0px 0px 0px; 
    background-color:${colors.positive};
    border:2px solid #b7c3e7;
}

`;

export const DangerBUtton = styles(MainBtn)`
background-color:${colors.danger};
&:hover{
    background-color:${colors.danger};
    color:white;
  
}
&:active{
    background-color:${colors.activeDanger};
    border:2px solid #e3aeaf;
}
`;
