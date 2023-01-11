import styled from "styled-components";
import { Container as LaundryContainer } from "../laundryRooms/laundryRooms.style";

export const Container = styled(LaundryContainer)``;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: auto;
`;
export const TextArea = styled.textarea`
  width: 90%;
  height: 300px;
`;
