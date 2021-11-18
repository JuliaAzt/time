import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import Heading from "../../Typography/Heading/Heading";
import Switch from "../Switch";
import { Row } from "react-grid-system";
import "./SignUp.scss";

const DadosLogin = (props) => {
  const [notifications, setNotifications] = useState(true);
  return (
    <form className="signup__container" onSubmit={props.onSubmit}>
      <Row justify="center">
        <Heading variant="h2" additionalClass="signup__heading">
          Dados de Login
        </Heading>
      </Row>

      <Input
        placeholder="Senha"
        type="password"
        onChange={() => console.log("change")}
      />
      <Input
        placeholder="Confirmar senha"
        type="password"
        onChange={() => console.log("change")}
      />
      <div className="signup__switch">
        <Switch
          label="Notificações"
          onClick={() => setNotifications(!notifications)}
          onChange={() => setNotifications(!notifications)}
          checked={notifications}
        />
      </div>

      <Button type="submit">Próxima etapa</Button>
    </form>
  );
};

export default DadosLogin;
