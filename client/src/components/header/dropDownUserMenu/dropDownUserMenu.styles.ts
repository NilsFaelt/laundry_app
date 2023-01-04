import styles from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../../styles/colors";
import * as globalStyles from "../../../styles/globalStyles";

interface MenuProps {
  animation: string;
}
interface NavProps {
  animation: string;
}

export const Link = styles(NavLink)<NavProps>`
width:84%;
padding:8%;
border-bottom:1px solid black;
border-radius:5px;
font-size:15px ;
background-color:grey;
color:${colors.primaryText};
text-decoration:none;
animation-name: ${(props) => props.animation};
animation-duration: 0.5s;
animation-fill-mode: forwards;
&:hover{
  transition:0.2s;
  background-color:${colors.primary};
  text-decoration:underline 1px solid   ${colors.activePositive};
  border:1px solid white;
}
&:active{
  transition:0.2s;
  background-color:${colors.primary};
  box-shadow:0px 0px 0px  white;
  text-decoration:underline 1px solid   ${colors.activePositive};

}

@keyframes open-animation-nav {
    0% {opacity:0;}
    0%{opacity:0;}
    100% {opacity:1;}
   }
@keyframes close-animation-nav {
    0% {opacity:1;}
    30%{opacity:0;}
    100% {opacity:0;}
   }
 
   }
`;

export const UserMenu = styles(globalStyles.FlexedContainerCollumn)<MenuProps>`
justify-content:flex-start;
align-items:flex-start;
gap:0.4vh;
position:absolute;
top:70px;
right:0vw;
width:clamp(300px, 30vw, 300px);
padding:5px;
border-radius:5px 0px 0px 5px;
background-color:${colors.primary};
box-shadow:10px 10px 10px  black;
animation-name: ${(props) => props.animation};
animation-duration: 0.5s;
animation-fill-mode: forwards;
z-index:5;


@keyframes open-animation {
    0% { height: 0vh;
         width: 0vw;}

    100% { max-height:auto;
        width:clamp(300px, 30vw, 300px)
        box-shadow:10px 10px 10px grey;
        padding:5px;
        z-index-3;
        ; }
   }
@keyframes close-animation {
    0% { height:50vh;
        width:clamp(300px, 30vw, 500px); }
    100% { height: 0vh;
         width: 0vw;
         padding:0px;
        }
 
   }
`;
