import React from "react";
import "./MiniCard.scss";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { Row, Col } from "react-grid-system";
import { FaArrowUp, FaArrowDown, FaMinus } from "react-icons/fa";

const MiniCard = (props) => {
  function handlePercentIcon(percent) {
    if (percent < 0) return <FaArrowDown />;
    if (percent > 0) return <FaArrowUp />;
    return <FaMinus />;
  }

  function handelPercent(percent) {
    let newPercent = percent < 0 ? percent * -1 : percent;
    return newPercent.toLocaleString("pt-Br") + " %";
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

      <span
        className={ClassNames(
          "card-data__info",
          props.percent > 0 && "up",
          props.percent < 0 && "down"
        )}
      >
        {handlePercentIcon(props.percent)}
        {handelPercent(props.percent)}
        {props.observation && (
          <span className="card-data__observation">{props.observation}</span>
        )}
      </span>
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
