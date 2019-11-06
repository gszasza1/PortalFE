import './design.scss';

import React from 'react';

import { UserDataProps } from './connect';

interface Props extends UserDataProps {}
export const UserDataUnconnected = (props: Props) => {
  if (!props.isLoaded) {
    props.getUserData({});
  }
  return (
    <div
      style={{
        backgroundColor:
          props.data && props.data.color ? props.data.color : "#ffffff"
      }}
      className="user-data-component"
    >
      {props.data && (
        <>
          <h2>
            {props.data.userName
              ? props.data.userName
              : "Ismeretlen felhasználó"}
          </h2>
          <p>
            Kedvenc szín:{" "}
            {props.data.color ? props.data.color : "Nincs kedvenc szín"}
          </p>
        </>
      )}
    </div>
  );
};
