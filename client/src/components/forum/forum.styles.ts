import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import * as globalStyles from "../../styles/globalStyles";

export const BackgroundContainer = styles.div`
width:100vw;
height:120vh;
background-image:url(${laundryImg});
`;
export const Container = styles(globalStyles.FlexedContainerCollumn)`
margin:0 auto;
margin-top:20vh;
width:clamp(300px, 70%, 800px);
height:auto;
background-color:${colors.primary};
padding:calc(20px + 2vw);
border-radius:5px;
box-shadow:10px 10px 10px;
`;

export const TreadsAndPoststContainer = styles(globalStyles.FlexedContainerRow)`
margin:0 auto;
width:110%;
height:auto;
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
width:clamp(100px, 20%, 200px);
height:auto;
background-color:${colors.primary};
padding:calc(20px + 2vw);
border-radius:5px;
box-shadow:3px 3px 3px;
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
font-size:15px;
color:${colors.white};
text-align:center;
`;
