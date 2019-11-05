import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg
} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import tempImage from "../../assets/tempImage.png";
import { BASE_PATHS, AUTH_PATH } from "../../router/paths";

export interface GameCardProps {
  img?: string;
  title: string;
  subtitle: string;
  cardText: string;
  id?: string;
}

export const GameCard = (props: GameCardProps) => {
  return (
    <Card className="card-game">
      <CardImg top width="100%" src={tempImage} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          <h3>{props.title}</h3>
        </CardTitle>
        <CardSubtitle>
          {" "}
          <p>{props.subtitle}</p>
        </CardSubtitle>
        <CardText>
          <span>{props.cardText}</span>
        </CardText>
        <Button>
          <Link
            to={
              BASE_PATHS.AUTH +
              AUTH_PATH.GAME +
              "/" +
              (props.id ? props.id : "")
            }
          >
            Irány
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
};
