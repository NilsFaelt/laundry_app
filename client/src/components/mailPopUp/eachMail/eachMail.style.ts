import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { FlexedContainerRow } from "../../../styles/globalStyles";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineMailOpen } from "react-icons/hi";

export const Container = styled(FlexedContainerRow)`
  position: relative;
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
  position: absolute;
  right: 10px;
  top: 15px;
  color: black;
  scale: 0.8;
  transform: scale(2);
`;
export const MailOpen = styled(HiOutlineMailOpen)`
  position: absolute;
  right: 10px;
  top: 15px;
  color: black;
  scale: 0.9;
  transform: scale(2);
`;
