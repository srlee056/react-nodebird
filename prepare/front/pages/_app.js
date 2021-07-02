// pages에 포함된 모든 페이지의 공통된 사항을 처리 가능.
import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import propTypes from 'prop-types';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>NodeBird</title>
      </Head>
      
      <Component />
    </>
  )
};

App.propTypes = {
  Component : propTypes.elementType.isRequired,
}

export default App;