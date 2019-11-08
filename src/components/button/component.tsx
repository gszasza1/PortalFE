import './design.scss';

import React from 'react';
import { Tooltip } from 'reactstrap';

interface Props {
  onClick?: Function;
  tooltip?: string;
  disabled?: boolean;
  text?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = (props: Props) => {
  const { id, text, onClick, tooltip, disabled, type } = props;
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className="next-button"
        id={id ? id : "button-tooltip"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          onClick && onClick();
        }}
      >
        {text ? text : "Következő"}
      </button>
      {tooltip && (
        <Tooltip target={id ? id : "button-tooltip"}>{tooltip}</Tooltip>
      )}
    </>
  );
};
