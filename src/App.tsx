import './App.scss';

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Footer } from './components/footer/component';
import { Header } from './components/header';
import { LoginProps } from './connect';
import { RouteLayer } from './router/route-layers/connect';
import { MENU } from './user/menu';

interface Props extends LoginProps {}
interface State {
  isMenuOpen: boolean;
}
export default class AppUnconnected extends React.Component<Props, State> {
  state: State = {
    isMenuOpen: false
  };
  componentDidMount() {
    this.props.checkLoggedin({ currentUrl: window.location.pathname });
  }

  render() {
    return (
      <div className="App" id="outer-container">
        <Header></Header>
        {this.props.isConnected && (
          <Menu
            isOpen={this.state.isMenuOpen}
            pageWrapId={"page-wrap"}
            onStateChange={e => this.setState({ isMenuOpen: e.isOpen })}
            outerContainerId={"outer-container"}
          >
            <ul className="log-menu">
              {MENU.map(menuItem => (
                <li key={menuItem.path}>
                  <Link
                    to={menuItem.path}
                    onClick={() => this.setState({ isMenuOpen: false })}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Menu>
        )}
        <div className="main-component" id="page-wrap">
          <Breadcrumb>
            {this.props.currentRoute.split("/").map((item, index) => (
              <BreadcrumbItem key={index}>
                {index > 0 &&
                  index < this.props.currentRoute.split("/").length && (
                    <Link
                      to={this.props.currentRoute
                        .split("/")
                        .map((x, i) => (i <= index ? `${x}` : ""))
                        .join("/")
                        .replace(/\/$/, "")}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  )}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <RouteLayer></RouteLayer>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
