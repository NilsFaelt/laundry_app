import { LoginInfo } from "../../../../types/loginTypes";

type SendInputInfo = (
  e: React.ChangeEvent<HTMLInputElement>,
  setLoginInfo: React.Dispatch<React.SetStateAction<LoginInfo>>
) => void;

export const changeInputInfo: SendInputInfo = (e, setLoginInfo) => {
  setLoginInfo((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
