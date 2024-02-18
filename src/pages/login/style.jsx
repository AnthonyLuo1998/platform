import { styled } from "styled-components";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/brand.svg";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    width: 144px;
    height: 37px;
    background: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .please-login {
    font-size: 28px;
    color: gray;
    text-align: center;
  }

  .user-login {
    font-size: 16px;
    text-align: center;
  }

  .login-form-wrap {
    width: 420px;
    height: 640px;
    box-shadow: 1px 1px 4px gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login-form {
    width: 280px;
    height: 480px;
  }
`;
