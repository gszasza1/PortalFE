import { ISendInputExcercise } from '../../../Client';

export interface SubmitFormProps {
  submitForm: (props: ISendInputExcercise) => void;
  getData: (props: { id: number }) => void;
}
