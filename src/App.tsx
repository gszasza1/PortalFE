import './App.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Footer } from './components/footer/component';
import { Header } from './components/header';
import { LoginProps } from './connect';
import { RouteLayer } from './router/route-layers/connect';

interface Props extends LoginProps {}
export default class AppUnconnected extends React.Component<Props> {
  componentDidMount() {
    this.props.checkLoggedin({ currentUrl: window.location.pathname });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="main-component">
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
