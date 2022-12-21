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
export const Post = styles.p`
margin-left:15px;
margin-top:10px;
font-size:16px;
color:black;
text-align:center;
word-break: break-word;
`;

export const PostContainer = styles.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
margin-top:30px;
border-radius:15px;
border:1px solid black;
background-color:${colors.white};
height:30vh;
width:90%;
overflow:scroll;
padding-bottom:10px;
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
border:1px solid black;
padding:1vh;
&:focus {
  border:1px solid black;
  outline: none;
}
@media (max-width: 500px) {
  margin-top:200px;
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
