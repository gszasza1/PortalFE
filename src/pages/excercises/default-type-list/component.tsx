import ABCD from "../../../assets/abcd.svg";
import React from "react";
import { ExcerciseCard } from "./card/component";
import { RouteComponentProps } from "react-router";

import "./design.scss";
import { EXCECISE_PATH } from "../../../router/paths";
export interface ExcersiseTypes {
  id?: string;
  img: string;
  text: string;
  title?: string;
  path: string;
}
const ExcersiseTypes: ExcersiseTypes[] = [
  {
    text: "Választó",
    title: "A B C D választó",
    img: ABCD,
    path: EXCECISE_PATH.ABCD
  },
  {
    text: "Feleletadó",
    title: "Feleletadó",
    img: ABCD,
    path: EXCECISE_PATH.INPUTNUMBER
  },
  {
    text: "Teszt",
    title: "Több feladatból álló teszt",
    img: ABCD,
    path: EXCECISE_PATH.TESZT
  }
];

const ExcerciseList = (props: RouteComponentProps<{}>) => {
  return (
    <div className="excerciselist">
      {ExcersiseTypes.map(item => (
        <ExcerciseCard
          generalInfo={item}
          routerProps={props}
          key={item.path}
        ></ExcerciseCard>
      ))}
    </div>
  );
};
export default ExcerciseList;
