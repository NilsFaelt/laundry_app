import { useState } from "react";
import * as styles from "./login.styles";
import { LoginInfo } from "../../../types/loginTypes";
import { changeInputInfo } from "./utils/changeInputInfo";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    Email: null,
    Password: null,
  });

  console.log(loginInfo);
  return (
    <styles.BackgroundContainer>
      <styles.Container>
        <styles.Title>Login</styles.Title>
        <styles.Form>
          <styles.Input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputInfo(e, setLoginInfo)
            }
            name='Email'
            placeholder='Email'
          ></styles.Input>
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputInfo(e, setLoginInfo)
            }
            required
            name='Password'
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
