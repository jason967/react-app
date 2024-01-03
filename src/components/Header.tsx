import React from "react";
import styled from "@emotion/styled";
import main_logo from "../assets/svg/Logo.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <img src={main_logo} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  height: 64px;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
`;

const Action = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
