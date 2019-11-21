import './design.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal } from 'reactstrap';

import { DispachedProps, MappedProps } from '.';
import { BASE_PATHS } from '../../router/paths';
import { UserData } from '../user-data/connect';

interface State {
  dropdownOpen: boolean;
  modalOpen: boolean;
  id?:string;
}
interface Props extends MappedProps, DispachedProps {}

export class HeaderUnconnected extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      modalOpen: false
    };
  }

  componentDidMount() {}

  dropdownToogle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  changeTheme = () => {
    this.props.toogle();
  };
  modalToogle = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  render() {
    return (
      <>
        <header id={this.state.id}>
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
                    {this.props.checkdata.totalScore
                      ? this.props.checkdata.totalScore
                      : "Nono Név"}
                  </p>
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.dropdownToogle}
                  >
                    <DropdownToggle tag="p" caret>
                      {this.props.checkdata.userName
                        ? this.props.checkdata.userName
                        : "Nono Név"}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem header>profil</DropdownItem>
                      <DropdownItem onClick={() => this.modalToogle()}>
                        Adatok
                      </DropdownItem>
                      <DropdownItem onClick={() => this.props.logout()}>
                        Kijelentkezés
                      </DropdownItem>
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

        <Modal
          className="user-modal"
          isOpen={this.state.modalOpen}
          toggle={() => this.modalToogle()}
        >
          <UserData></UserData>
        </Modal>
      </>
    );
  }
}
