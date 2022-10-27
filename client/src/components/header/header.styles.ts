import styles from "styled-components";
import * as globalStyles from "../../styles/globalStyles";
import { CiUser } from "react-icons/all";
import { colors } from "../../styles/colors";

export const Container = styles(globalStyles.FlexedContainerRow)`
position:absolute;
top:0;
justify-content:space-between;
width:100vw;
height:clamp(80px, 5vh, 200px);
box-shadow:0px 0px 10px;
`;

export const Title = styles(globalStyles.MainTitle)`
margin-left:30px;
`;

export const User = styles(CiUser)`
position:absolute;
right:1px;
transform:scale(3);
margin-right:30px;
&:hover{
cursor:pointer;
color:${colors.hover};
};
&:active{

}

`;
