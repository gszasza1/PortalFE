import React from "react";
import "./design.scss";
import { ExcersiseTypes } from "../component";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props {
  generalInfo: ExcersiseTypes;
  routerProps: RouteComponentProps<{}>;
}

export const ExcerciseCard = (prop: Props) => {
  const { path, img, text, title } = prop.generalInfo;
  const { match } = prop.routerProps;
  return (
    <Link to={match.url + path}>
      <div title={title} className="card">
        <img src={img} alt=""></img>
        <p>{text}</p>
      </div>
    </Link>
  );
};
