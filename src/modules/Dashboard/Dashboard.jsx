import React from "react";
import "./Dashboard.scss";
import MiniCard from "../../components/MiniCard";
import { Row, Col } from "react-grid-system";
import { FaUsers, FaPercent, FaUserCircle } from "react-icons/fa";
import { IoPieChartSharp, IoStopwatchOutline } from "react-icons/io5";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const isLogged = false;
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <span className="dashboard-header__title">PÁGINA INICIAL</span>
        <div className="dashboard-header__user">
          {isLogged ? (
            <>
              <span className="user-text">Michael Scott</span>
              <div className="photo"></div>
            </>
          ) : (
            <>
              <Link className="user-text" to="/login">
                Fazer Login
              </Link>
              <FaUserCircle className="user-icon" />
            </>
          )}
        </div>
      </div>
      <Row>
        <Col sm={6} md={4} lg={3}>
          <MiniCard
            title="Saldo de horas"
            content="3h 15m"
            percent={3.48}
            observation="Desde o último mês"
            icon={<IoStopwatchOutline />}
            backgroundColorIcon="#f5365c"
          />
        </Col>

        <Col sm={6} md={4} lg={3}>
          <MiniCard
            title="Tarefas em andamento"
            content="25"
            percent={0}
            observation="Desde o último mês"
            icon={<IoPieChartSharp />}
            backgroundColorIcon="#fb6340"
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <MiniCard
            title="Tarefas concluídas"
            content="924"
            percent={-1.1}
            observation="Desde ontem"
            icon={<FaUsers />}
            backgroundColorIcon="#53e273"
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <MiniCard
            title="Avaliação"
            content={<Rating value={4.5} />}
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
