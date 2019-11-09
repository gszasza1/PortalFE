import './design.scss';

import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

import { SingleNewsProps } from './connect';

interface NewsRouteProps {
  id: string;
}
interface Props extends SingleNewsProps, RouteComponentProps<NewsRouteProps> {}

export class SingleNewsUnconnected extends React.Component<Props> {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.SingleNewsGetData({ id: this.props.match.params.id });
    }
  }
  render() {
    return (
      <div className="single-news-container">
        {this.props.data &&
          this.props.data.id &&
          this.props.match.params.id.toString() ===
            this.props.data.id.toString() && (
            <>
              <h2>{this.props.data.title}</h2>
              <span>{this.props.data.description}</span>
              <span className="date">
                {new Date(this.props.data.date).toLocaleDateString()}
              </span>
              <div>
                <Link to="">Főoldalra</Link>
                <Button
                  color="primary"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    this.props.history.goBack();
                  }}
                >
                  Vissza
                </Button>
              </div>
            </>
          )}
        {this.props.isRequesting && (
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        )}
      </div>
    );
  }
}
export default withRouter(SingleNewsUnconnected);
