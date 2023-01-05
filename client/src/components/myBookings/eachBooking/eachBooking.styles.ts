import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { AiFillCloseCircle } from "react-icons/ai";

export const container = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  align-self: center;
  width: 90%;
  margin-top: 5px;
  padding-bottom: 2vh;
  background-color: black;
  box-shadow: 3px 3px 3px;
`;

export const Title = styled.h2`
  margin-top: 1.5vh;
  margin-bottom: 1vh;
  font-size: 15px;
  color: ${colors.white};
  text-align: center;
`;
export const Span = styled.span`
  color: ${colors.showActiveLink};
`;
export const TitleBooked = styled.h2`
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: 15px;
  color: ${colors.danger};
  text-align: center;
`;

export const Delete = styled(AiFillCloseCircle)`
  left: 20px;
  top: 3vh;
  color: white;
  transform: scale(2.5);
  cursor: pointer;
  &:hover {
    color: ${colors.danger};
  }
`;
