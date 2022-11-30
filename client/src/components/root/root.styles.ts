import styles from "styled-components";
import * as glolbalStyles from "../../styles/globalStyles";
import laundryImg from "../../assets/img/laundry.png";

export const Container = styles(glolbalStyles.FlexedContainerCollumn)`
height:auto;
width:auto;
background-image:url(${laundryImg});
`;
