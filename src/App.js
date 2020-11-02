import * as React from 'react'
import { Layout, Menu } from 'antd';
// 路由使用 history模式
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Hello from './components/hello'
import Button from './components/button'
import Alert from './components/alert'
import 'antd/dist/antd.css';
import logo from './logo.svg'
import './App.css';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-wrap">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="App-logo"><img src={logo} /></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/button'>Button</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/alert'>Alert</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to='/hello'>Hello</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path='/button' component={Button} />
              <Route exact path='/alert' component={Alert} />
              <Route exact path='/hello' component={Hello} />
              {/* <Redirect to='/' /> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default App;
