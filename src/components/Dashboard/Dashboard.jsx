import React from "react";
import "./Dashboard.scss";
import Card from "./Card";
import { Row, Col } from "react-grid-system";
import { FaUsers, FaPercent } from "react-icons/fa";
import { IoPieChartSharp, IoStopwatchOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <span className="dashboard-header__title">PÁGINA INICIAL</span>
        <div className="dashboard-header__user">
          <span>Michael Scott</span>
          <div className="photo"></div>
        </div>
      </div>
      <Row>
        <Col sm={6} md={4} lg={3}>
          <Card
            title="Saldo de horas"
            content="3h 15m"
            percent={3.48}
            observation="Desde o último mês"
            icon={<IoStopwatchOutline />}
            backgroundColorIcon="#f5365c"
          />
        </Col>

        <Col sm={6} md={4} lg={3}>
          <Card
            title="Tarefas em andamento"
            content="25"
            percent={-3.48}
            observation="Desde o último mês"
            icon={<IoPieChartSharp />}
            backgroundColorIcon="#fb6340"
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card
            title="Tarefas concluídas"
            content="924"
            percent={-1.1}
            observation="Desde ontem"
            icon={<FaUsers />}
            backgroundColorIcon="#53e273"
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card
            title="Avaliação"
            content="estrelas"
            percent={12}
            observation="Desde o último mês"
            icon={<FaPercent />}
            backgroundColorIcon="#11cdef"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
