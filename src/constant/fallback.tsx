import React from "react";
import { Spinner } from "reactstrap";

import "./constant.scss";
export const Fallback = () => {
  return (
    <div className="fallback">
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="primary" />
    </div>
  );
};
