import React from 'react';
import { RouteComponentProps } from 'react-router';

import { GeneralProps } from '../../../../functions/interfaces';
import { InputExcerciseForm } from '../form/connect';
import { SubmitFormProps } from '../interface';
import { MappedProps } from './connect';

interface EditExcerciseId {
  excerciseId?: string;
}
interface Props
  extends SubmitFormProps,
    GeneralProps,
    MappedProps,
    RouteComponentProps<EditExcerciseId> {}

export class EditInputExcerciseFormUnconnected extends React.Component<Props> {
  componentDidMount() {
    console.log(this.props.match);
    if (this.props.match.params.excerciseId) {
      this.props.getData({ id: +this.props.match.params.excerciseId });
    }
  }
  render() {
    return <InputExcerciseForm {...this.props}></InputExcerciseForm>;
  }
}
