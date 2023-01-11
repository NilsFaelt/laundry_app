import styled from "styled-components";
import { colors } from "../../../styles/colors";
interface Props {
  toogleBigMessage: boolean;
}
export const Container = styled.div<Props>`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 4;
  top: 120%;
  right: 5%;
  background-color: ${colors.primary};
  padding: calc(20px + 2vw);
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px black;
  cursor: pointer;

  &:hover {
    border: 1px solid ${colors.white};
  }
  animation: ${(props) => (props.toogleBigMessage ? "containerAni" : "")} 2s
    forwards;
  @keyframes containerAni {
    0% {
    }
    100% {
      top: 50%;
      right: 50%;
      transform: translate(50%, 50%);
      width: 300px;
      height: 300px;
      opacity: 1;
      border: 1px solid ${colors.white};
      background-color: ${colors.primaryDark};
    }
  }
`;
export const TextContainer = styled.div<Props>`
  opacity: 0;
  width: 300px;
  height: 300px;
  word-wrap: break-word;
  overflow: scroll;
  animation: ${(props) => (props.toogleBigMessage ? "textAni" : "")} 2s forwards;
  @keyframes textAni {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MessageTitle = styled.h2`
  margin-top: 30px;
  text-align: center;
  color: ${colors.activeDanger};
`;
export const MessageTitleOpen = styled.h2<Props>`
  text-align: center;
  color: ${colors.showActiveLink};
  margin-bottom: 20px;
  animation: ${(props) => (props.toogleBigMessage ? "textAni" : "")} 2s forwards;
  @keyframes textAni {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const P = styled.p<Props>`
  opacity: 0;
  color: ${colors.white};
  font-size: 18px;
  line-break: auto;
  animation: ${(props) => (props.toogleBigMessage ? "textAni" : "")} 2s forwards;
  @keyframes textAni {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const PFrom = styled.p`
  color: ${colors.showActiveLink};
  font-size: 18px;
  margin-top: 10px;
  line-break: auto;
`;
export const ClickMe = styled.p`
  text-align: center;
  color: ${colors.white};
`;
