import './design.scss';

import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik';
import * as React from 'react';
import { Button, Label } from 'reactstrap';

import { LoginStoreProps } from './connect';

interface Props extends LoginStoreProps {}

interface State {
  disabled: boolean;
  tooltipOpen: boolean;
  styles: React.CSSProperties;
  displayColorPicker: boolean;
  popoverOpen: boolean;
}
export class LoginUnConnected extends React.PureComponent<Props, State> {
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
  tooglePopup() {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }

  render() {
    return (
      <div className="image">
        <div className="Login">
          <Formik
            initialValues={{
              userName: "",
              password: ""
            }}
            onSubmit={(values, actions) => {
              this.props.LoginSend({
                ...values
              });

              setTimeout(() => {
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            <FormikForm>
              <ul>
                <li>
                  <Label>Felhasználó:</Label>
                  <Field className="input" name="userName"></Field>
                  <ErrorMessage name="userName" />
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
              </ul>
              <Button id="sendbutton" type="submit" class="button">
                {this.props.isRequesting ? "Betöltés" : "Küldés"}
              </Button>
              {this.props.error && <p>Hiba történt</p>}
            </FormikForm>
          </Formik>
        </div>
      </div>
    );
  }
}
