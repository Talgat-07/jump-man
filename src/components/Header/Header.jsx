import React from "react";
import "../../style/Header.sass";
import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";
import BlockHeader from "./BlockHeader";

const Header = () => {
  return (
    <header className="header">
      <LogoHeader />
      <NavHeader />
      <BlockHeader />
    </header>
  );
};

export default Header;
