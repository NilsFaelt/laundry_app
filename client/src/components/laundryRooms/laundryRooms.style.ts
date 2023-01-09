import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import { colors } from "../../styles/colors";
import { FlexedContainerRow } from "../../styles/globalStyles";
import { MainBtn } from "../../styles/globalStyles";
import { AiOutlineDelete } from "react-icons/ai";

export const BackgroundContainer = styled(FlexedContainerRow)`
  padding-top: 20vh;
  padding-bottom: 20vh;
  align-items: flex-start;
  width: 100vw;
  height: 120vh;
  background-image: url(${laundryImg});
`;

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(330px, 50vw, 500px);
  height: 75vh;
  padding: 20px;
  background-color: ${colors.primary};
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
  border: 1px solid black;
`;

export const LaundryRoomsContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: ${colors.primary};
  border-radius: 5px;
  border: 1px solid black;
  overflow: scroll;
  padding: 5px;
`;

export const EachRoomContainer = styled(FlexedContainerRow)`
  position: relative;
  justify-content: space-between;
  margin-top: 5px;
  background-color: ${colors.primary};
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 3px 3px black;
  color: white;
  span {
    color: ${colors.showActiveLink};
  }
`;
export const Delete = styled(AiOutlineDelete)`
  top: 15px;
  color: black;
  scale: 0.7;
  transform: scale(2);
  color: ${colors.white};
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  text-align: center;
  margin-top: 10px;
  height: 30px;
  width: 250px;
  color: ${colors.white};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;
export const Input = styled.input`
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  width: 250px;
`;
export const Btn = styled(MainBtn)`
  margin-top: 10px;
`;
