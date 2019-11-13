import './design.scss';

import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

import { INPUT_EXCECISE_PATH } from '../../../../router/paths';
import { GetAllInputExcerciseProps } from './connect';

interface Props extends RouteComponentProps, GetAllInputExcerciseProps {}
export class GeneralInputExcerciseUnconnected extends React.Component<Props> {
  componentDidMount() {
    this.props.getData({});
  }
  delete(id: number) {
    this.props.deleteData({ id });
  }
  render() {
    return (
      <div>
        <ButtonGroup>
          <Link to={this.props.match.path + INPUT_EXCECISE_PATH.CREATE}>
            <Button>Új létrehozása</Button>
          </Link>
        </ButtonGroup>
        <ListGroup className="input-excercise-list">
          {this.props.data &&
            this.props.data.map(item => (
              <ListGroupItem key={item.id} className="item-list">
                <p>{item.question}</p>
                <Link to={this.props.match.path + "/edit/" + item.id}>
                  <i className="pi pi-pencil"></i>
                </Link>
                <i
                  onClick={() => this.delete(item.id)}
                  className="pi pi-times-circle"
                ></i>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  }
}
