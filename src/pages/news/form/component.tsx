import './design.scss';

import React from 'react';
import { Form, Input, Label, Spinner } from 'reactstrap';

import { Button } from '../../../components/button/component';
import { GameCard } from '../../../components/game-card/card';
import { ConnectNewFormProps } from '../interface';
import { NewsFormProps } from './connect';

interface Props extends NewsFormProps, ConnectNewFormProps {
  id?: string;
}
export class NewsFormUnconnected extends React.Component<Props> {
  componentDidMount() {
    if (this.props.id && +this.props.id) {
      this.props.getForm({ id: Number(this.props.id) });
    }
  }
  render() {
    return (
      <div className="news-form-editor-container">
        <Form className="new-form">
          <Label>A hír címe</Label>
          <Input
            onChange={e =>
              this.props.modifyNewsForm({
                ...this.props.formdata,
                title: e.target.value
              })
            }
            value={this.props.formdata.title}
            placeholder="Cím"
          ></Input>
          <Label>A hír leírása</Label>
          <textarea
            onChange={e =>
              this.props.modifyNewsForm({
                ...this.props.formdata,
                description: e.target.value
              })
            }
            value={this.props.formdata.description}
            placeholder="Leírás"
          ></textarea>
          <Label>Link ha tartozik hozzá</Label>
          <Input
            onChange={e =>
              this.props.modifyNewsForm({
                ...this.props.formdata,
                link: e.target.value
              })
            }
            value={this.props.formdata.link}
            placeholder="Link"
          ></Input>
          <div>
            <Button
              onClick={() => {
                this.props.submitForm(this.props.formdata);
              }}
              text="Beküldés"
            ></Button>
            <Button
              text="Reset"
              onClick={() => {
                this.props.resetForm();
              }}
            ></Button>
          </div>
          {this.props.isRequesting && (
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          )}
        </Form>
        <div>
          <h3>Előnézet</h3>
          <GameCard
            cardText={this.props.formdata.description}
            title={this.props.formdata.title}
            subtitle={this.props.formdata.link}
          ></GameCard>
        </div>
      </div>
    );
  }
}
