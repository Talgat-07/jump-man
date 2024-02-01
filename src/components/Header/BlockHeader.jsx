import React from "react";
import searchIcon from "../../images/icon-search.svg";
import cartIcon from "../../images/icons-cart.svg";
import avatarIcon from "../../images/icon-avatar.svg";

const BlockHeader = () => {
  return (
    <div className="block">
      <img src={searchIcon} alt="search" />
      <img src={cartIcon} alt="cart" />
      <img src={avatarIcon} alt="avatar" />
    </div>
  );
};

export default BlockHeader;
