import React from "react";
import Button from "../Button";
import Heading from "../../Typography/Heading/Heading";
import { Row, Col } from "react-grid-system";
import { MdOutlineMarkEmailUnread as EmailIcon } from "react-icons/md";
import "./SignUp.scss";

const DadosFinais = (props) => {
  return (
    <form className="signup__container" onSubmit={props.onSubmit}>
      <Row justify="center">
        <Heading variant="h2" additionalClass="signup__heading">
          Finalização
        </Heading>
      </Row>
      <Row align="center">
        <Col offset={{ md: 1 }} md={3} align="center">
          <EmailIcon className="signup__icon" />
        </Col>
        <Col md={7}>
          <p className="signup__paragraph">
            Verifique sua caixa de entrada para confirmação de e-mail.
          </p>
        </Col>
      </Row>

      <Button type="submit">Entrar</Button>
    </form>
  );
};

export default DadosFinais;
