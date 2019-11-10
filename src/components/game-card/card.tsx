import './design.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

import { AUTH_PATH, BASE_PATHS } from '../../router/paths';

export interface GameCardProps {
  title?: string;
  subtitle?: string;
  cardText?: string;
  id?: number;
}

export const GameCard = (props: GameCardProps) => {
  return (
    <Card className="card-game">
      <div
        className="card-backgound"
        style={{
          backgroundColor: `rgb(${
            props.cardText && props.cardText.length < 100
              ? parseInt(
                  (
                    (props.cardText.length * 19 < 400
                      ? 200
                      : props.cardText.length * 15) / 6
                  ).toString()
                )
              : 200
          },
            ${
              props.cardText && props.cardText.length < 130
                ? parseInt(
                    (
                      (props.cardText.length * 7 < 200
                        ? 150
                        : props.cardText.length * 5) / 4
                    ).toString()
                  )
                : 150
            },${
            props.cardText && props.cardText.length < 80
              ? parseInt(((props.cardText.length * 9) / 2).toString())
              : 200
          })
            
          `
        }}
      >
        <p> {props.title ? props.title.charAt(0) : "X"}</p>
      </div>
      <CardBody>
        <CardTitle>
          <h3>{props.title}</h3>
        </CardTitle>
        <CardSubtitle>
          <p>{props.subtitle}</p>
        </CardSubtitle>
        <CardText>
          <span>{props.cardText && props.cardText.substring(0, 20)}</span>
        </CardText>
        <Button>
          <Link
            to={
              BASE_PATHS.AUTH +
              AUTH_PATH.NEWS +
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
