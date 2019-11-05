import React from "react";
import { MappedProps, DispachedProps } from ".";
import Switch from "react-switch";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./design.scss";
import { Link } from "react-router-dom";
import { MENU } from "../../user/menu";
import { BASE_PATHS } from "../../router/paths";

interface State {
  dropdownOpen: boolean;
}
interface Props extends MappedProps, DispachedProps {}

export class HeaderUnconnected extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  changeTheme = () => {
    this.props.toogle();
  };

  render() {
    return (
      <>
        <header>
          <div>
            <Link to="/" className="logo"></Link>
          </div>
          {this.props.isConnected === false ? (
            <div>
              <Link className="register-text" to={BASE_PATHS.REGISTER}>
                Regisztráció
              </Link>
              <Link to={BASE_PATHS.LOGIN} color="link">
                Bejelentkezés
              </Link>
            </div>
          ) : (
            <>
              {this.props.checkdata && (
                <div>
                  <p>
                    {this.props.checkdata.userName
                      ? this.props.checkdata.userName
                      : "Nono Név"}
                  </p>
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle tag="p" caret>
                      Név
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem header>profil</DropdownItem>
                      <DropdownItem disabled>Adatok</DropdownItem>
                      <DropdownItem disabled>Kijelentkezés</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem header>Téma átállítása</DropdownItem>

                      <div className="switcher">
                        <Switch
                          onChange={this.changeTheme}
                          checked={this.props.theme === 1}
                        ></Switch>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
            </>
          )}
        </header>
        {this.props.isConnected && (
          <ul className="log-menu">
            {MENU.map(menuItem => (
              <li key={menuItem.path}>
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
