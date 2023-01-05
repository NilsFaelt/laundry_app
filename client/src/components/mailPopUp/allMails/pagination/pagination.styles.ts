import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import * as globalStyles from "../../../../styles/globalStyles";
import { colors } from "../../../../styles/colors";

interface Props {
  underline?: string;
}

export const Container = styled(globalStyles.FlexedContainerRow)`
  justify-content: space-between;
  width: 250px;
  background-color: ${colors.primary};
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px black;
  color: white;
`;
export const Left = styled(AiOutlineLeftCircle)`
  transform: scale(2.5);
  color: white;
  &:hover {
    color: ${colors.showActiveLink};
  }
`;
export const Right = styled(AiOutlineRightCircle)`
  transform: scale(2.5);
  color: white;
  &:hover {
    color: ${colors.showActiveLink};
  }
`;
export const NrContainer = styled(globalStyles.FlexedContainerRow)`
  position: relative;
  background-color: transparent;
  gap: 5px;
  width: 200px;
`;
export const PaginationNr = styled.p<Props>`
  text-decoration: ${(props) => props.underline};
  margin-left: 0;
  color: white;
`;
