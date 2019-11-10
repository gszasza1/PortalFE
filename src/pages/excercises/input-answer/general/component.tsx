import './design.scss';

import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

import { INPUT_EXCECISE_PATH } from '../../../../router/paths';

export const GeneralInputExcercise = (props: RouteComponentProps) => {
  return (
    <div>
      <ButtonGroup>
        <Link to={props.match.path + INPUT_EXCECISE_PATH.CREATE}>
          <Button>Új létrehozása</Button>
        </Link>
        <Link to={props.match.path + INPUT_EXCECISE_PATH.LIST}>
          <Button>Új létrehozása</Button>
        </Link>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
  );
};
