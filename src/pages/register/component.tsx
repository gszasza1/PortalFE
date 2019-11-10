import './design.scss';

import { ErrorMessage, Field, Formik } from 'formik';
import * as React from 'react';
import { SketchPicker } from 'react-color';
import { Label, Popover, PopoverBody } from 'reactstrap';

import { Button } from '../../components/button/component';
import { generalValidation } from '../../functions/validation';
import { RegisterStoreProps } from './connect';

interface Props extends RegisterStoreProps {}

interface State {
  disabled: boolean;
  tooltipOpen: boolean;
  styles: React.CSSProperties;
  displayColorPicker: boolean;
  popoverOpen: boolean;
}
export class RegisterUnConnected extends React.PureComponent<Props, State> {
  state = {
    disabled: false,
    tooltipOpen: false,
    styles: { color: "" },
    displayColorPicker: false,
    popoverOpen: false
  };
  toogleColorpick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  tooglePopup(isValid: boolean) {
    this.setState({ popoverOpen: !isValid });
  }

  render() {
    const { state } = this;
    const { color } = state.styles;
    return (
      <div className="image">
        <div className="register">
          <Formik
            initialValues={{
              userName: "",
              password: "",
              repassword: "",
              color: ""
            }}
            validationSchema={generalValidation()}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isValid, values }) => (
              <form>
                <ul>
                  <li>
                    <Label>Felhasználó:</Label>
                    <Field className="input" name="userName"></Field>
                    <ErrorMessage name="userName" />
                  </li>
                  <li>
                    <Label>Évfolyam:</Label>
                    <Field className="input" name="age"></Field>
                    <ErrorMessage name="age" />
                  </li>
                  <li>
                    <Label>E-mail:</Label>
                    <Field className="input" name="email"></Field>
                    <ErrorMessage name="email" />
                  </li>

                  <li>
                    <Label>Jelszó:</Label>
                    <Field
                      className="input"
                      type="password"
                      name="password"
                    ></Field>
                    <ErrorMessage name="password" />
                  </li>

                  <li>
                    <Label>Jelszó újra:</Label>
                    <Field
                      className="input"
                      type="password"
                      name="repassword"
                    ></Field>
                    <ErrorMessage name="repassword"></ErrorMessage>
                  </li>
                  <li className="color">
                    <div
                      className="colorpick"
                      style={{ color }}
                      id="colorpick"
                      onClick={this.toogleColorpick}
                    >
                      Szín választása
                      <div />
                    </div>
                    {color && (
                      <div
                        className="pickedcolor"
                        style={{ backgroundColor: color }}
                      ></div>
                    )}
                  </li>
                  <Popover
                    placement="top"
                    isOpen={this.state.displayColorPicker}
                    target="colorpick"
                    toggle={() => this.toogleColorpick()}
                  >
                    <div>
                      <SketchPicker
                        color={this.state.styles.color}
                        onChangeComplete={() => this.toogleColorpick()}
                        onChange={e =>
                          this.setState({
                            styles: { ...this.state.styles, color: e.hex }
                          })
                        }
                      />
                    </div>
                  </Popover>
                </ul>
                <Button
                  id="sendbutton"
                  type="submit"
                  text="Beküldés"
                  onClick={() =>
                    isValid &&
                    this.props.registerSend({
                      ...values,
                      color: this.state.styles.color
                    })
                  }
                ></Button>
                <Popover
                  placement="bottom"
                  isOpen={this.state.popoverOpen}
                  target="sendbutton"
                  toggle={() => this.tooglePopup(isValid)}
                >
                  <PopoverBody>
                    Pár mező nincs megfelelően kitöltve. Kérlek ellenőrizd
                  </PopoverBody>
                </Popover>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
