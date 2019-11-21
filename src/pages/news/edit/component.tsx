import React from 'react';
import { RouteComponentProps } from 'react-router';

import { EditNewsFormConnected } from './connect';

interface EditRouterProps {
  newsId: string;
}

interface Props extends RouteComponentProps<EditRouterProps> {}
export class EditNewsForm extends React.Component<Props> {
  render() {
    return (
      <EditNewsFormConnected
        id={this.props.match.params.newsId}
      ></EditNewsFormConnected>
    );
  }
}
export default EditNewsForm;
