import { IPostNews } from '../../Client';
import { GeneralProps } from '../../functions/interfaces';
import { GetEditNewsFormParams } from './edit/actions/edit.get';

export interface DispatchedProps {
  submitForm: (props: IPostNews) => void;
  getForm: (prop: GetEditNewsFormParams) => void;
}
export interface MappedProps extends GeneralProps {
    isEdit:boolean;
}
export interface ConnectNewFormProps extends DispatchedProps, GeneralProps {}
