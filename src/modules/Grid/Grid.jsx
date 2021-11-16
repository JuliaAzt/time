import React from "react";
import "./Grid.scss";
import { Container, Row, Col } from "react-grid-system";
import Card from "../../components/Card";
import data from "./data";

const Grid = () => {
  return (
    <Container fluid justify="center">
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
          <Card
            image={data[0].image}
            title={data[0].title}
            author={data[0].author}
            content={data[0].content}
            categories={data[0].categories}
            rating={data[0].rating}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
