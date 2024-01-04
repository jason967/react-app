import React from "react";
import styled from "@emotion/styled";
import main_logo from "../assets/svg/Logo.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <TopBar>
        <Logo src={main_logo} />
        <Action>
          <UserName>User Name !!!!!</UserName>
          <Divider />
          <Button>개인정보 수정</Button>
          <Divider />
          <Button>로그아웃</Button>
        </Action>
      </TopBar>
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

  border-bottom: 1px solid var(--CoolGray-CoolGray100, #e6eaec);
  background: var(--TrueGray-White, #fff);
`;

const TopBar = styled.ul`
  background-color: aqua;
  display: flex;
  height: 36px;
  /* max-width: var(--ScreenMaxWidth, 1600px); */
  padding: 0px 8px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const Logo = styled.img<{ src: string }>`
  width: 88px;
  height: 24px;
  flex-shrink: 0;
  src: ${({ src }) => src};
`;

const Action = styled.ul`
  display: flex;
  padding: 0px var(--Radius_LG, 8px);
  justify-content: flex-end;
  align-items: center;
  gap: var(--Radius_XL, 16px);
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;

  color: var(--CoolGray-CoolGray700, #4e5962);
  /* H5 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

const UserName = styled.p`
  color: var(--CoolGray-CoolGray700, #4e5962);
  text-align: right;
  /* Body2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const Divider = styled.div`
  height: 12px;
  border-left: 1px solid var(--CoolGray-CoolGray200);
`;
