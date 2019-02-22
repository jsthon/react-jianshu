import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavSearch></NavSearch>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <span className="iconfont">&#xe614;</span>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe615;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;