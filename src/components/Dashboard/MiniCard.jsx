import React from "react";
import "./MiniCard.scss";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { Row, Col } from "react-grid-system";
import { FaArrowUp, FaArrowDown, FaMinus } from "react-icons/fa";

const MiniCard = (props) => {
  function handlePercent(percent, observation) {
    const newPercent =
      (percent < 0 ? percent * -1 : percent).toLocaleString("pt-Br") + " %";

    const percentIcon =
      percent < 0 ? <FaArrowDown /> : percent > 0 ? <FaArrowUp /> : <FaMinus />;

    const classNames = ClassNames(
      "card-data__info",
      percent > 0 && "up",
      percent < 0 && "down"
    );

    return (
      <span className={classNames}>
        {percentIcon} {newPercent}
        {observation && (
          <span className="card-data__observation">{observation}</span>
        )}
      </span>
    );
  }

  return (
    <div className="card">
      <Row className="card-data">
        <Col xs={8} className="card-data__header">
          <span className="card-data__title">{props.title}</span>
          <span className="card-data__content">{props.content}</span>
        </Col>
        <Col xs={4} className="card-data__icon-wrapper">
          <div
            style={{ background: props.backgroundColorIcon }}
            className="card-data__icon"
          >
            {props.icon && props.icon}
          </div>
        </Col>
      </Row>
      {handlePercent(props.percent, props.observation)}
    </div>
  );
};

MiniCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  percent: PropTypes.number,
  observation: PropTypes.string,
  icon: PropTypes.node,
  backgroundColorIcon: PropTypes.string,
};

MiniCard.defaultProps = {
  percert: 0,
  observation: "",
};

export default MiniCard;
