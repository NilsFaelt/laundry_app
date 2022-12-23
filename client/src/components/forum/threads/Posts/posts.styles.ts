import styles from "styled-components";
import * as globalStyles from "../../../../styles/globalStyles";
import { colors } from "../../../../styles/colors";

export const Container = styles(globalStyles.FlexedContainerCollumn)`
position:relative;
margin:0 auto;
margin-top:5vh;
width:clamp(300px, 70%, 660px);
background-color:${colors.primary};
padding:10px ;
border-radius:5px;
box-shadow:10px 10px 10px;
@media (max-width: 700px) {
  width:90%;
}
`;
export const SecondaryTitle = styles.h4`
margin-top:0vh;
margin-top:1vh;
font-size:16px;
color:${colors.white};
text-align:center;
`;

export const EachPostContainer = styles(globalStyles.FlexedContainerCollumn)`
align-items:flex-start;
background-color:transparent;
border-radius:15px;
padding:5px;
margin-top:5px;
width:96%;
@media (max-width: 400px) {
  margin-right:10px;
  
}


`;
export const DateAndUserContaienr = styles(globalStyles.FlexedContainerRow)`
justify-content:space-between;
background-color:transparent;
width:100%;
`;
export const Post = styles.p`
background-color:${colors.bluePositive};
border-radius:10px;
width:96%;
padding-top:15px;
padding-bottom:15px;
margin-left:1%;
margin-left:15px;
margin-top:3px;
font-size:16px;
color:black;
text-align:center;
word-break: break-word;

`;
export const User = styles.p`
margin-left:15px;
margin-top:3px;
font-size:14px;
color:black;
word-break: break-word;

`;
export const Date = styles.p`
margin-left:15px;
margin-top:3px;
font-size:12px;
margin-right:10px;
color:black;
word-break: break-word;
`;

export const PostContainer = styles.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
gap:10px;
margin-top:30px;
background-color:transparent;
height:300px;
width:90%;
padding-bottom:10px;
@media (max-width: 400px) {
  margin-top:0px;
  width:100%;
  
}
`;
export const InnerPostContainer = styles.div`
border-radius:15px;
border:1px solid black;
width:100%;
overflow:scroll;
height:300px;
background-color:white;
padding-bottom:30px;
`;

export const Form = styles.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;
width:100%;
`;

export const Input = styles(globalStyles.Input)`
width:80%;
margin-top:30px;
border-radius:15px;
height:auto;
word-break: break-word;
border:1px solid black;
padding:1vh;
&:focus {
  border:1px solid black;
  outline: none;
}

@media (max-width: 300px) {
  margin-top:100px;
}
`;
export const Btn = styles(globalStyles.MainBtn)`
margin-top:20px;
margin-bottom:20px;
box-shadow:3px 3px 3px black;
`;
