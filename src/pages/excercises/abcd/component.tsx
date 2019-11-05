import * as React from "react";
import { AbcdStoreProps } from "./connect";

import "./design.scss";
import { CountDown } from "../../../components/timer/component";
import QuestionMark from "../../../assets/question_mark.svg";
import { Tooltip } from "reactstrap";
import { Button } from "../../../components/button/component";
interface Props extends AbcdStoreProps {}

export class ABCDUnConnected extends React.PureComponent<Props> {
  state = {
    disabled: false,
    tooltipOpen: false
  };
  componentDidMount() {
    if (this.props.items === undefined) {
      this.props.getAbcdData();
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
            <div className="abcd-wrapper">
              <img id="Tooltipped" src={QuestionMark} alt=""></img>
              <Tooltip
                placement="right"
                isOpen={this.state.tooltipOpen}
                target="Tooltipped"
                toggle={this.toggle}
              >
                <p className="question-mark">
                  ABCD feladatválasztó. Megoldás kiválasztásához válassz egyet a
                  megadott válaszok közül. Megadott válasz idő leteltével
                  automatikusan beküldődik.
                </p>
              </Tooltip>
              <h3>{props.items.data.text}</h3>
            </div>
            <div className="answer-container">
              {props.items.data.answers.map(item => (
                <button
                  disabled={this.state.disabled}
                  key={item.id}
                  className={`abcd-answer ${
                    props.currentAnswer && props.currentAnswer === item.id
                      ? "selected-answer"
                      : ""
                  } ${
                    props.currentAnswer === item.id && this.state.disabled
                      ? "failed"
                      : ""
                  } ${props.correctAnswer === item.id ? "correct" : ""}`}
                  onClick={() => props.modifyAnswer(item.id)}
                >
                  {item.answer}
                </button>
              ))}
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
                  : () => props.getAbcdData()
              }
            ></Button>
          </>
        )}
      </div>
    );
  }
}
