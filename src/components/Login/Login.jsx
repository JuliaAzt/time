import React from "react";
import Input from "../Input";
import Button from "../Button";
import Heading from "../../Typography/Heading/Heading";
import Link from "../../Typography/Link/Link";
import { Row } from "react-grid-system";

import "./Login.scss";
const Login = (props) => {
  return (
    <form className="login__container">
      <Row justify="center">
        <Heading variant="h3" additionalClass="login__heading">
          Login
        </Heading>
      </Row>
      <Input
        placeholder="E-mail"
        type="email"
        onChange={() => console.log("change")}
        required
      />
      <Input
        placeholder="Senha"
        type="password"
        onChange={() => console.log("change")}
        required
      />

      <Link href="#" additionalClass="login__forgotpsw">
        Esqueci minha senha
      </Link>
      <Button type="submit">Entrar</Button>
      <Link href="/signup" additionalClass="login__signup">
        Não é cadastrado? Cadastre-se.
      </Link>
    </form>
  );
};

export default Login;
