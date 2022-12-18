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
height:70vh;
background-color:${colors.primary};
padding:calc(20px + 2vw);
border-radius:5px;
box-shadow:10px 10px 10px;

`;

export const TreadsAndPoststContainer = styles(globalStyles.FlexedContainerRow)`
margin:0 auto;
width:110%;
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
export const ThreadsContainer = styles(globalStyles.FlexedContainerCollumn)`
margin:0 auto;
min-width:100px;
height:70%;
background-color:transparent;
padding:calc(20px + 2vw);
border-radius:5px;
`;
export const ThreadsContainerScroll = styles(
  globalStyles.FlexedContainerCollumn
)`
margin:0 auto;
margin-top:20px;
min-width:100px;
height:50%vh;
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

margin-bottom:10px;
box-shadow:3px 3px 3px black;

`;

export const Input = styles(globalStyles.Input)``;
export const Label = styles(globalStyles.Label)``;
