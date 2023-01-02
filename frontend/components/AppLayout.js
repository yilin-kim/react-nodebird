import React, { useState } from "react";
import PropTypes from "prop-types";
// next 자체 라우터 Link
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* 24등분 기준: 모바일일 때 화면 전체 차지하다가 md 사이즈 되면 1/4, 1/2, 1/4 차지해서 한 줄에 나온다. */}
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://blog.naver.com/irenek91"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Yilin
          </a>
        </Col>
      </Row>
    </div>
  );
};

// ** Type 검사
// propTypes를 사용하면 props의 type을 검사할 수 있다. (npm i prop-types)
// return 안에 들어가는 모든 것이 node 타입
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
