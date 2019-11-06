import './design.scss';

import React from 'react';
import { Form, Input, Label } from 'reactstrap';

import { Button } from '../../../components/button/component';

interface Props {}
export class NewsForm extends React.Component<Props> {
  render() {
    return (
      <Form className="new-form">
        <Label>A hír címe</Label>
        <Input placeholder="Cím"></Input>
        <Label>A hír leírása</Label>
        <textarea placeholder="Leírás"></textarea>
        <Label>Link ha tartozik hozzá</Label>
        <Input placeholder="Link"></Input>
        <div>
          <Button type="submit" text="Beküldés"></Button>
          <Button text="Reset"></Button>
        </div>
      </Form>
    );
  }
}
