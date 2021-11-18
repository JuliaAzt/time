import React from "react";
import Input from "../Input";
import Button from "../Button";
import Heading from "../../Typography/Heading/Heading";
import Link from "../../Typography/Link/Link";
import { Row } from "react-grid-system";
import "./SignUp.scss";

const DadosPessoais = (props) => {
  return (
    <form className="signup__container" onSubmit={props.onSubmit}>
      <Row justify="center">
        <Heading variant="h2" additionalClass="signup__heading">
          Dados Pessoais
        </Heading>
      </Row>
      <Input
        placeholder="Nome"
        type="text"
        onChange={() => console.log("change")}
        //required
      />
      <Input
        placeholder="E-mail"
        type="email"
        onChange={() => console.log("change")}
        //required
      />
      <Input
        placeholder="(99) 9 9999-9999"
        type="text"
        mask="(99) 9 9999-9999"
        onChange={() => console.log("change")}
        //required
      />

      <Button type="submit">Próxima etapa</Button>
      <Link href="/login" additionalClass="signup__signup">
        Já é cadastrado? Faça login.
      </Link>
    </form>
  );
};

export default DadosPessoais;
