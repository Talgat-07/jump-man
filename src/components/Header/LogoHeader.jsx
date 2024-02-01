import React from "react";
import logoJordan from "../../images/logo-jumpman.svg";
import logoNike from "../../images/logo_nike.svg";

const LogoHeader = () => {
  return (
    <div className="logo">
      <figure>
        <img src={logoJordan} alt="logo Jordan" />
        <figcaption>JORDAN</figcaption>
      </figure>
      <img src={logoNike} alt="logo Nike" />
    </div>
  );
};

export default LogoHeader;
