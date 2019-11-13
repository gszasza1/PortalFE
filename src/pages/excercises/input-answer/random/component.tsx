import './design.scss';

import * as React from 'react';
import { Input, Tooltip } from 'reactstrap';

import QuestionMark from '../../../../assets/question_mark.svg';
import { Button } from '../../../../components/button/component';
import { CountDown } from '../../../../components/timer/component';
import { RandomStoreProps } from './connect';

interface Props extends RandomStoreProps {}

export class RandomUnconnected extends React.PureComponent<Props> {
  state = {
    disabled: false,
    tooltipOpen: false
  };
  componentDidMount() {
    this.props.getInputAnswerData();
  }
  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  sendAnswer = () => {
    if (this.props.data && this.props.answer)
      this.props.answerSend({
        id: this.props.data.id,
        answer: this.props.answer
      });
    this.setState({ disabled: true });
  };

  render() {
    const { props } = this;
    return (
      <div>
        {props.data && (
          <>
            <div className="InputAnswer-wrapper">
              <img id="Tooltipped" src={QuestionMark} alt=""></img>
              <Tooltip
                placement="right"
                isOpen={this.state.tooltipOpen}
                target="Tooltipped"
                toggle={this.toggle}
              >
                <p className="question-mark">
                  InputAnswer feladatválasztó. Megoldás kiválasztásához válassz
                  egyet a megadott válaszok közül. Megadott válasz idő
                  leteltével automatikusan beküldődik.
                </p>
              </Tooltip>
              <h3>{props.data.question}</h3>
            </div>
            <div className="answer-container">
              <Input
                disabled={this.state.disabled}
                value={this.props.answer}
                onChange={e => props.modifyAnswer(e.target.value)}
              ></Input>
            </div>
            <CountDown endTime={() => this.sendAnswer()}></CountDown>
            <h3>Helyes válasz: {props.answer && props.answer}</h3>>
            <Button
              disabled={this.props.isRequesting}
              text={"Válasz beküldése"}
              onClick={() => this.sendAnswer()}
            ></Button>
          </>
        )}
      </div>
    );
  }
}
