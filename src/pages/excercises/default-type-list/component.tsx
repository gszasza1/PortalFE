import './design.scss';

import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import ABCD from '../../../assets/abcd.svg';
import { ABCD_EXCECISE_PATH, EXCECISE_PATH, INPUT_EXCECISE_PATH } from '../../../router/paths';
import { ExcerciseCard } from './card/component';

export interface ExcersiseTypes {
  id?: string;
  img: string;
  text: string;
  title?: string;
  path: string;
  creator_path: string;
}
const ExcersiseTypes: ExcersiseTypes[] = [
  {
    text: "Választó",
    title: "A B C D választó",
    img: ABCD,
    path: EXCECISE_PATH.ABCD + ABCD_EXCECISE_PATH.RANDOM,
    creator_path: EXCECISE_PATH.ABCD + ABCD_EXCECISE_PATH.CREATE
  },
  {
    text: "Feleletadó",
    title: "Feleletadó",
    img: ABCD,
    path: EXCECISE_PATH.INPUT + INPUT_EXCECISE_PATH.RANDOM,
    creator_path: EXCECISE_PATH.INPUT + INPUT_EXCECISE_PATH.CREATE
  },
  {
    text: "Teszt",
    title: "Több feladatból álló teszt",
    img: ABCD,
    path: EXCECISE_PATH.TESZT,
    creator_path: EXCECISE_PATH.TESZT
  }
];

const ExcerciseList = (props: RouteComponentProps<{}>) => {
  return (
    <div className="excerciselist">
      {ExcersiseTypes.map(item => (
        <div>
          <ExcerciseCard
            generalInfo={item}
            routerProps={props}
            key={item.path}
          ></ExcerciseCard>
          <Link to={props.location.pathname + item.creator_path}>
            Új felvétele
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ExcerciseList;
