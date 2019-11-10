import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Input } from 'reactstrap';

import { GeneralProps } from '../../../../functions/interfaces';
import { SubmitFormProps } from '../interface';
import { InputExcerciseFormProps } from './connect';

interface ExcerciseId {
  excerciseId?: string;
}
interface Props
  extends InputExcerciseFormProps,
    SubmitFormProps,
    GeneralProps,
    RouteComponentProps<ExcerciseId> {}
export class InputExcerciseFormUnconnected extends React.Component<Props> {
  componentDidMount() {
    this.props.getData({ id: 1 });
  }
  render() {
    return (
      <div>
        <form>
          <Input
            onChange={e =>
              this.props.modifyInputExcerciseForm({
                ...this.props.formdata,
                question: e.target.value
              })
            }
            value={this.props.formdata.question}
            placeholder="Kérdés"
          ></Input>
          <Input
            onChange={e =>
              this.props.modifyInputExcerciseForm({
                ...this.props.formdata,
                correctAnswer: e.target.value
              })
            }
            value={this.props.formdata.correctAnswer}
            placeholder="Helyes válasz"
          ></Input>
          <Input
            type="number"
            onChange={e =>
              this.props.modifyInputExcerciseForm({
                ...this.props.formdata,
                age: +e.target.value
              })
            }
            value={this.props.formdata.age}
            placeholder="Évfolyamnak"
          ></Input>
          <Input
            type="number"
            onChange={e =>
              this.props.modifyInputExcerciseForm({
                ...this.props.formdata,
                timeForAnswer: +e.target.value
              })
            }
            value={this.props.formdata.timeForAnswer}
            placeholder="A válaszra szánt idő"
          ></Input>
          <Input
            onChange={e =>
              this.props.modifyInputExcerciseForm({
                ...this.props.formdata,
                helpForAnswer: e.target.value
              })
            }
            value={this.props.formdata.helpForAnswer}
            placeholder="Segítség"
          ></Input>
          <Button
            onClick={() => {
              this.props.submitForm(this.props.formdata);
            }}
          >
            Beküldés
          </Button>
          <Button
            onClick={() => {
              this.props.resetForm();
            }}
          >
            Reset
          </Button>
        </form>
      </div>
    );
  }
}
