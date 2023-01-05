import styled from "styled-components";
import * as globalStyles from "../../../../styles/globalStyles";
import { colors } from "../../../../styles/colors";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

interface MenuProps {
  animation: string;
}

interface NavProps {
  animation: string;
}

export const Container = styled(globalStyles.FlexedContainerCollumn)`
  position: relative;
  margin: 0 auto;
  margin-top: 5vh;
  width: clamp(300px, 70%, 660px);
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;
export const SecondaryTitle = styled.h4`
  margin-top: 0vh;
  margin-top: 1vh;
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
`;

export const Info = styled.h3`
  margin-top: 0vh;
  margin-top: 10vh;
  font-size: 16px;
  color: black;
  text-align: center;
`;

export const EachPostContainer = styled(globalStyles.FlexedContainerCollumn)`
  position: relative;
  align-items: flex-start;
  background-color: transparent;
  border-radius: 15px;
  padding: 5px;
  margin-top: 5px;
  width: 96%;
  @media (max-width: 400px) {
    margin-right: 10px;
  }
`;
export const DateAndUserContaienr = styled(globalStyles.FlexedContainerRow)`
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
`;
export const Post = styled.p`
  box-shadow: 1px 1px 1px;
  background-color: ${colors.bluePositive};
  border-radius: 10px;
  width: 90%;
  padding: 25px 5px 25px 5px;
  margin-left: 1%;
  margin-left: 15px;
  margin-top: 3px;
  font-size: 16px;
  color: black;
  text-align: center;
  word-break: break-word;
`;
export const User = styled.p`
  margin-left: 15px;
  margin-top: 3px;
  font-size: 14px;
  color: black;
  word-break: break-word;
`;
export const Date = styled.p`
  margin-left: 15px;
  margin-top: 3px;
  font-size: 12px;
  margin-right: 0px;
  color: black;
  word-break: break-word;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const PostContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-top: 30px;
  background-color: transparent;
  height: 300px;
  width: 90%;
  padding-bottom: 10px;
  @media (max-width: 400px) {
    margin-top: 25px;
    width: 100%;
  }
`;
export const InnerPostContainer = styled.div`
  border-radius: 5px;
  border: 1px solid black;
  width: 100%;
  overflow: scroll;
  height: 300px;
  background-color: white;
  padding-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Input = styled(globalStyles.Input)`
  width: 80%;
  margin-top: 30px;
  border-radius: 15px;
  height: auto;
  word-break: break-word;
  border: 1px solid black;
  padding: 1vh;
  &:focus {
    border: 1px solid black;
    outline: none;
  }

  @media (max-width: 300px) {
    margin-top: 100px;
  }
`;
export const Btn = styled(globalStyles.MainBtn)`
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 3px black;
`;

export const Delete = styled(AiOutlineDelete)`
  color: red;
  position: absolute;
  right: -3px;
  top: 30px;
  transform: scale(1);
  &:hover {
    cursor: pointer;
  }
`;

export const HamBurger = styled(AiOutlineMenu)`
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  position: absolute;
  transform: scale(1.5);
  z-index: 3;
  &:hover {
    cursor: pointer;
    color: ${colors.hover};
  }
`;

export const UserDark = styled(AiOutlineMenu)`
  color: grey;
`;

export const UserMenu = styled(globalStyles.FlexedContainerCollumn)`
  z-index: 2;
  position: absolute;
  top: 40px;
  right: 0px;
  gap: 5px;
  padding: 5px;
  height: max-conent;
  width: max-content;
  border-radius: 5px 0px 0px 5px;
  background-color: ${colors.primary};
  box-shadow: 10px 10px 10px black;
  animation-duration: 0s;
  animation-fill-mode: forwards;
`;

export const PostsLink = styled.div`
  width: 120px;
  padding: 15px;
  border-bottom: 1px solid black;
  border-radius: 5px;
  font-size: 15px;
  background-color: grey;
  color: ${colors.primaryText};
  text-decoration: none;
  animation-duration: 0s;
  animation-fill-mode: forwards;
  &:hover {
    transition: 0.2s;
    background-color: ${colors.primary};
    text-decoration: underline 1px solid ${colors.activePositive};
    border: 1px solid white;
    cursor: pointer;
  }
  &:active {
    transition: 0.2s;
    background-color: ${colors.primary};
    box-shadow: 0px 0px 0px white;
    text-decoration: underline 1px solid ${colors.activePositive};
  }
`;
