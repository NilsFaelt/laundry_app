import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import { AiOutlineRollback } from "react-icons/ai";
import * as globalStyles from "../../styles/globalStyles";

export const BackgroundContainer = styles.div`
width:100vw;
height:120vh;
background-image:url(${laundryImg});
padding-bottom:200px;
`;
export const Container = styles(globalStyles.FlexedContainerCollumn)`
position:relative;
margin:0 auto;
margin-top:20vh;
width:clamp(300px, 70%, 800px);
background-color:${colors.primary};
padding:10px ;
border-radius:5px;
box-shadow:10px 10px 10px;
@media (max-width: 700px) {
  width:90%;
}
@media (max-width: 500px) {
  margin-top:100px;
}
`;

export const ThreadsContainerScroll = styles(
  globalStyles.FlexedContainerCollumn
)`
margin:0 auto;
margin-bottom:30px;
min-width:100px;
height:170px;
background-color:transparent;
padding:calc(20px + 2vw);
padding-top:120px;
border-radius:5px;
overflow: scroll;
@media (max-width: 500px) {
  height:170px;
}
`;

export const ThreadsContaineWrapper = styles(
  globalStyles.FlexedContainerCollumn
)`
margin:0 auto;
width:100%;
height:auto;
background-color:transparent;
border-radius:5px;

`;

export const Title = styles.h2`
margin-top:0vh;
margin-bottom:2vh;
margin-top:2vh;
font-size:20px;
color:${colors.white};
text-align:center;
`;
export const SecondaryTitle = styles.h2`
margin-top:-2vh;
margin-bottom:2vh;
font-size:18px;
color:${colors.white};
text-align:center;
`;

export const Btn = styles(globalStyles.MainBtn)`
margin-top:10px;
margin-bottom:20px;
box-shadow:3px 3px 3px black;

`;

export const ThreadsHeader = styles(globalStyles.FlexedContainerRow)`
padding:calc(20px + 1vw);
margin-top:50px;;
width:73%;
justify-content:space-between;
flex-basis:0;
flex-grow:1;
overflow-wrap: break-word;
font-size:15px;
color:white;
@media (max-width: 700px) {
  width:60%;
}
@media (max-width: 600px) {
  width:80%;
}

`;
export const Label = styles(globalStyles.Label)``;

export const Back = styles(AiOutlineRollback)`
position:absolute;
left:20px;
color:white;
transform:scale(2);
cursor:pointer
`;
