import styled from "styled-components";
import laundryImg from "../../assets/img/laundry.png";
import * as globalStyles from "../../styles/globalStyles";
import { colors } from "../../styles/colors";

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-image: url(${laundryImg});
`;

export const InfoContainer = styled.div`
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(330px, 50vw, 500px);
  height: auto;
  padding: 20px;
  padding-bottom: 60px;
  background-color: ${colors.primary};
  border-radius: 5px;
  box-shadow: 10px 10px 10px;
  border: 1px solid black;
`;
export const AdressContainer = styled.div`
  width: 96%;
  margin-top: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.activePositive};
  border-radius: 5px;
  padding-bottom: 10px;
  border: 1px solid ${colors.showActiveLink};
`;
export const Title = styled.h2`
  font-size: 16px;
  margin-top: 10px;
  color: ${colors.white};
`;
export const ClickableTitle = styled.h2`
  font-size: 16px;
  margin-top: 20px;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: underline;
`;
export const P = styled.p`
  font-size: 14px;
  font-weight: bolder;
  margin-top: 8px;
  margin-left: 8px;
  color: black;
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-top: 10px;
  color: white;
  font-size: 12px;
`;
export const LabelWarning = styled.label`
  margin-top: 10px;
  color: ${colors.activeDanger};
  font-size: 16px;
`;

export const Input = styled(globalStyles.Input)`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  padding: 1px;
  font-size: 14px;
`;

export const Btn = styled(globalStyles.MainBtn)`
  margin-top: 15px;
  box-shadow: 1px 1px 1px grey;
`;
