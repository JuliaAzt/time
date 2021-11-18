import React from "react";
import "./Grid.scss";
import { Container, Row, Col } from "react-grid-system";
import Card from "../../components/Card";
import data from "./data";

const Grid = () => {
  return (
    <Container fluid justify="center">
      <Row>
        {data.map((el) => (
          <Col key={el.id} xs={12} sm={6} md={4} xxl={3}>
            <Card
              image={el.image}
              title={el.title}
              author={el.author}
              content={el.content}
              categories={el.categories}
              rating={el.rating}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
