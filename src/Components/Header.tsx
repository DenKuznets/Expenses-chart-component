import React from "react";
import StyledHeader from "./Styled/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <div className="balance">
        <span className="balance__header">My balance</span>
        <span className="balance__numbers">$921.48</span>
      </div>
      <div className="balance__white-circle"></div>
      <div className="balance__black-circle"></div>
    </StyledHeader>
  );
}

export default Header;
