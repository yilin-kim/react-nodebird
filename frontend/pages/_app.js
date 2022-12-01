// page들의 공통적인 것들을 처리하는 곳

import PropTypes from "prop-types";
import Head from "next/head";
import { checkPropTypes } from "prop-types";
import "antd/dist/reset.css";

// 모든 페이지의 공통적인 건 _app.js,
// 특정 컴포넌트끼리 공통적인 건 layout으로 만들어서 감싸기
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nodebird</title>
      </Head>
      <Component />
    </>
  );
};

App.prototypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
