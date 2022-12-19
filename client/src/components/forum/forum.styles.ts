import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import * as globalStyles from "../../styles/globalStyles";

export const BackgroundContainer = styles.div`
width:100vw;
height:120vh;
background-image:url(${laundryImg});
padding-bottom:200px;
`;
export const Container = styles(globalStyles.FlexedContainerCollumn)`
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

`;

export const TreadsAndPoststContainer = styles(globalStyles.FlexedContainerRow)`
margin:0 auto;
width:100%;
height:100%;
background-color:rgba(0,0,0,0);
border-radius:5px;
margin:0;
padding:0;
gap:20px;


`;
export const PostsContainer = styles(globalStyles.FlexedContainerCollumn)`
margin:0 auto;
width:50%;
height:auto;
background-color:${colors.primary};
padding:calc(20px + 2vw);
border-radius:5px;
box-shadow:3px 3px 3px;
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
margin-bottom:4vh;
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
margin-top:50px;
background-color:transparent;
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
export const Input = styles(globalStyles.Input)`
max-width:500px;
`;
export const Label = styles(globalStyles.Label)``;
