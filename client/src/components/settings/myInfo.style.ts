import styles from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";

export const BackgroundContainer = styles.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;
background-image:url(${laundryImg});
`;

export const InfoContainer = styles.div`
display:flex;
flex-direction:column;
align-items:center;
width:clamp(300px, 30vw, 800px);
height:auto;
padding:20px;
padding-bottom:60px;
background-color:${colors.primary};
border-radius:5px;
box-shadow:10px 10px 10px;
`;
export const AdressContainer = styles.div`
width:96%;
margin-top:10px;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
background-color:${colors.activePositive};
border-radius:5px;
padding-bottom:10px;
`;
export const Title = styles.h2`
font-size:16px;
margin-top:10px;
color:${colors.white}
`;
export const ClickableTitle = styles.h2`
font-size:16px;
margin-top:20px;
color:${colors.white};
cursor:pointer;
text-decoration:underline;
`;
export const P = styles.p`
font-size:14px;
font-weight:bolder;
margin-top:8px;
margin-left:8px;
color:black;
`;
