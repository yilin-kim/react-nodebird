import React, { useCallback, useState, useMemo } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

// const style = useMemo(() => ({ marginTop: 10 }), []);

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  //  component에 props로 넘겨주는 함수는 useCallback으로 감싸주는 게 좋다.
  //   const onChangeId = useCallback((e) => {
  //     setId(e.target.value);
  //   }, []);

  //   const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  //   }, []);

  //   onFinish는 이미 preventDefault 적용되어 있다.
  const onSubmitForm = useCallback(() => {
    console.log(id, password), [id, password];
    setIsLoggedIn(true);
  });

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* 객체는 새로 생길 때마다 서로 다르기 때문에 inline style에 객체 넣으면 리액트가 virtualDOM으로 검사할 때 다르다고 이 부분을 리렌더링한다. */}
      {/* return 부분이 virtual DOM인데 리렌더링시 함수는 다시 실행하는데 바뀐 부분만 다시 그린다. */}
      {/* 해결방법 1. useMemo <div style={style}></div> */}
      {/* 해결방법 2. styled component */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        {/* Link에 href 넣고 a에는 안 넣는 게 좋다. */}
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
