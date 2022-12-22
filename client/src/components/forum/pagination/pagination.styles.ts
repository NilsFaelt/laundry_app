import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../../styles/colors";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import * as globalStyles from "../../../styles/globalStyles";

interface Props {
  underline?: string;
}

export const Container = styles(globalStyles.FlexedContainerRow)`
justify-content:space-between;
width:300px;
background-color:${colors.primary};
margin-bottom:30px;
cursor:pointer;
padding:20px;
border-radius:5px;
box-shadow:3px 3px 3px black;
color:white;
`;
export const Left = styles(AiOutlineLeftCircle)`
transform:scale(2.5);
color:white;
&:hover{
    color:${colors.showActiveLink}
}

`;
export const Right = styles(AiOutlineRightCircle)`
transform:scale(2.5);
color:white;
&:hover{
    color:${colors.showActiveLink}
}
`;
export const NrContainer = styles(globalStyles.FlexedContainerRow)`
position:relative;
background-color:transparent;
gap:5px;
width:200px;
`;
export const PaginationNr = styles.p<Props>`
text-decoration:${(props) => props.underline};
margin-left:0;

color:white;
`;
