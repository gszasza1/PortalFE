import * as React from "react";
import { InputAnswerStoreProps } from "./connect";

import "./design.scss";
import { CountDown } from "../../../components/timer/component";
import QuestionMark from "../../../assets/question_mark.svg";
import { Tooltip, Input } from "reactstrap";
import { Button } from "../../../components/button/component";
interface Props extends InputAnswerStoreProps {}

export class InputAnswerUnConnected extends React.PureComponent<Props> {
  state = {
    disabled: false,
    tooltipOpen: false
  };
  componentDidMount() {
    if (this.props.items === undefined) {
      this.props.getInputAnswerData();
    }
  }
  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  sendAnswer = () => {
    this.props.answerSend();
    this.setState({ disabled: true });
  };

  render() {
    const { props } = this;
    return (
      <div>
        {props.items && (
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
              <h3>{props.items.data.text}</h3>
            </div>
            <div className="answer-container">
              <Input
                disabled={this.state.disabled}
                onChange={e => props.modifyAnswer(e.target.value)}
              ></Input>
            </div>
            <CountDown endTime={() => this.sendAnswer()}></CountDown>
            <Button
              disabled={this.props.isRequesting && !!props.correctAnswer}
              text={
                this.props.postSentNumber === 0
                  ? "Válasz beküldése"
                  : "Következő kérdés"
              }
              onClick={
                this.props.postSentNumber === 0
                  ? () => this.sendAnswer()
                  : () => props.getInputAnswerData()
              }
            ></Button>
          </>
        )}
      </div>
    );
  }
}
