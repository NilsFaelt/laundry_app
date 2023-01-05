import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { FlexedContainerRow } from "../../../styles/globalStyles";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export const Container = styled(FlexedContainerRow)`
  position: relative;
  justify-content: space-between;
  margin-top: 2px;
  background-color: ${colors.white};
  border: 1px solid black;
  padding: 10px;
  &:hover {
    background-color: ${colors.showActiveLink};
    cursor: pointer;
  }
`;

export const Mail = styled(TfiEmail)`
  right: 10px;
  top: 15px;
  color: black;
  scale: 0.8;
  transform: scale(2);
`;
export const MailOpen = styled(HiOutlineMailOpen)`
  right: 10px;
  top: 15px;
  color: black;
  scale: 0.9;
  transform: scale(2);
`;
export const Delete = styled(AiOutlineDelete)`
  top: 15px;
  color: black;
  scale: 0.7;
  transform: scale(2);
  &:hover {
    color: red;
  }
`;
export const Div = styled.div``;
