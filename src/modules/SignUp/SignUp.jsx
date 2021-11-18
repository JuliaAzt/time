import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosLogin from "./DadosLogin";
import DadosFinais from "./DadosFinais";
import "./SignUp.scss";
import { Step, Stepper } from "react-form-stepper";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const history = useNavigate();

  const alteraEtapa = () => {
    if (activeStep === 2) history("/login");
    setActiveStep(activeStep + 1);
  };
  const steps = [
    {
      label: "Dados Pessoais",
      element: <DadosPessoais onSubmit={alteraEtapa} />,
    },
    { label: "Dados Login", element: <DadosLogin onSubmit={alteraEtapa} /> },
    { label: "Dados Finais", element: <DadosFinais onSubmit={alteraEtapa} /> },
  ];
  return (
    <>
      <Stepper activeStep={activeStep} className={"signup__stepper"}>
        {steps.map((el, index) => {
          return (
            <Step label={el.label}>
              {index < activeStep ? <FaCheck /> : " "}
            </Step>
          );
        })}
      </Stepper>
      {steps[activeStep]["element"]}
    </>
  );
};

export default SignUp;
