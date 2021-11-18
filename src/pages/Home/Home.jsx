import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Heading from "../../Typography/Heading";
import Login from "../../modules/Login";
import SignUp from "../../modules/SignUp";
import "./Home.scss";
import logo from "../../assets/logo.svg";
import people from "../../assets/people.png";

const Home = (props) => {
  const variant = {
    Login: <Login />,
    SignUp: <SignUp />,
  }[props.variant];

  return (
    <>
      <Container fluid>
        <Row className="home__nav">
          <Col lg={1} md={6} sm={8} justify="center">
            <img src={logo} className="home__logo" alt="logo" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row align="stretch" className="home__body">
          <Col lg={4} md={6} sm={12} className="home__heading">
            <Heading variant="h1">
              Faça parte <br />
              da <span className="home__span">nossa</span> comunidade
            </Heading>
            <Row>
              <img src={people} alt="" className="home__info" />
            </Row>
          </Col>
          <Col lg={4} md={7} sm={12} offset={{ lg: 3, md: 2 }}>
            {variant}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
