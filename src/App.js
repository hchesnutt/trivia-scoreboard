import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';

import TestChart from './components/test-chart/TestChart';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          
        </Header>
        <Content className="content">
          <div className="site-layout-content">
            <TestChart />
          </div>
        </Content>
        <Footer className="footer">Henry Chesnutt ©2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
