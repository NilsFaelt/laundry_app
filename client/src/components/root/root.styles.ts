import styles from "styled-components";
import * as glolbalStyles from "../../styles/globalStyles";
import laundryImg from "../../assets/img/laundry.png";

export const Container = styles(glolbalStyles.FlexedContainerCollumn)`
height:100vh;
width:100vw;
background-image:url(${laundryImg});

`;
