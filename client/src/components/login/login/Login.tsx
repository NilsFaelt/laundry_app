import { useState } from "react";
import * as styles from "./login.styles";
import { LoginInfo } from "../../../types/loginTypes";
import { changeInputInfo } from "./utils/changeInputInfo";
import { login } from "../../../api/login";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: null,
    password: null,
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const test = await login(loginInfo);
    console.log(test, "in comp");
  };
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>Login</styles.Title>
        <styles.Form onSubmit={(e) => handleLogin(e)}>
          <styles.Input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputInfo(e, setLoginInfo)
            }
            name='email'
            placeholder='Email'
          ></styles.Input>
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputInfo(e, setLoginInfo)
            }
            required
            name='password'
            placeholder='Password'
            type={"password"}
          ></styles.Input>
          <styles.Btn>LOGIN</styles.Btn>
        </styles.Form>
      </styles.Container>
    </styles.BackgroundContainer>
  );
};

export default Login;
