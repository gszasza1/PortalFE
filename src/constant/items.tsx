import React from "react";
import "./constant.scss";

interface Props {
  className?: string;
}

export class Items extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className ? this.props.className : ""}>
        <div className="wrapper">{this.props.children}</div>
      </div>
    );
  }
}
