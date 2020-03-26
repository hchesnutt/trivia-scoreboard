import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
          >
            <Menu.Item>Main</Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <div className="site-layout-content">
            content
          </div>
        </Content>
        <Footer className="footer">Henry Chesnutt ©2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
