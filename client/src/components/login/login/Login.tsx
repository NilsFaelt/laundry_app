import { useState } from "react";
import * as styles from "./login.styles";
import { LoginInfo } from "../../../types/loginTypes";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    Email: null,
    Password: null,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(loginInfo);
  return (
    <styles.Container>
      <styles.Title>Login</styles.Title>
      <styles.Form>
        <styles.Input
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          name='Email'
          placeholder='Email'
        ></styles.Input>
        <styles.Input
          required
          name='Password'
          placeholder='Password'
          type={"password"}
        ></styles.Input>
        <styles.Btn>LOGIN</styles.Btn>
      </styles.Form>
    </styles.Container>
  );
};

export default Login;
