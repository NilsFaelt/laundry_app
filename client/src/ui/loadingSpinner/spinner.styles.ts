import styles, { keyframes } from "styled-components";

const spin = keyframes`
100%{
    transform: rotate(360deg); 
}
`;

export const Container = styles.div`
margin:50px;
width:50px;
height:50px;
border: 5px solid ${(props) => props.color} ;
border-bottom-color:transparent;
border-radius:50%;
animation:${spin}  1s linear infinite;
`;
