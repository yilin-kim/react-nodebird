import React from "react";
import PropTypes from "prop-types";
// next 자체 라우터 Link
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
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
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
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
