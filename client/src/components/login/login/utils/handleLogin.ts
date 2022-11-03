import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../../api/login";
import { loginUser } from "../../../../redux/userSlice";
import { LoginInfo } from "../../../../types/loginTypes";

type HandleLogin = (
  e: React.FormEvent<HTMLFormElement>,
  loginInfo: LoginInfo,
  setsShowLoginFailed: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any
) => void;
export const handleLogin: HandleLogin = async (
  e,
  loginInfo,
  setsShowLoginFailed,
  dispatch
) => {
  e.preventDefault();
  const user = await login(loginInfo);
  if (user) {
    dispatch(loginUser(user));
    setsShowLoginFailed(false);
  }
  setsShowLoginFailed(true);
};
