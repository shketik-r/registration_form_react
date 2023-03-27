import { useState } from "react";
import Submit from "./Submit/Submit";
import Input from "./Input/Input";
import Popup from "../Popup/Popup";
import s from "./WrapperForm.module.scss";

import {
  validatorLogin,
  validatorEmail,
  validatorPassword,
  validatorConfimPassword,
} from "./index";

const WrapperForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");

  const [messLogin, setMessLogin] = useState("");
  const [messEmail, setMessEmail] = useState("");
  const [messPassword, setMessPassword] = useState("");
  const [messConfimPassword, setMessConfimPassword] = useState("");

  const [modalActive, setModalActive] = useState(false);

  const formSubmission = async (e: {
    [x: string]: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();

    let showMessLogin = validatorLogin(login);
    let showMessEmail = validatorEmail(email);
    let showMessPassword = validatorPassword(password);
    let showMessConfirmPassword = validatorConfimPassword(password,confimPassword);

    setMessLogin(showMessLogin);
    setMessEmail(showMessEmail);
    setMessPassword(showMessPassword);
    setMessConfimPassword(showMessConfirmPassword);



    if (
      showMessLogin === "" &&
      showMessEmail === "" &&
      showMessPassword === "" &&
      showMessConfirmPassword === ""
    ) {
   
      setModalActive(true);
    }
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Регистрация</p>
      <form action="#" className={s.form} onSubmit={formSubmission}>
        <Input
          name="login"
          type="text"
          placeholder="введите логин"
          state={setLogin}
          label="Login"
          error={messLogin}
        />
        <Input
          name="email"
          type="email"
          placeholder="введите email"
          state={setEmail}
          label="Email"
          error={messEmail}
        />
        <Input
          name="password"
          type="password"
          placeholder="введите пароль"
          state={setPassword}
          label="Password"
          error={messPassword}
        />
        <Input
          name="confimPassword"
          type="password"
          placeholder="повторите пароль"
          state={setConfimPassword}
          label="Confim Password"
          error={messConfimPassword}
        />
        <Submit />
      </form>
      <Popup active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default WrapperForm;
