import React from 'react';

import { Items } from '../../constant/items';
import { CardPage } from './card-page/connect';
import { SliderPage } from './slider-page/component';
import { WelcomePage } from './welcome-page/component';

export default class PublicPage extends React.Component {
  render() {
    return (
      <>
        <WelcomePage></WelcomePage>
        {items.map((item, index) => (
          <Items key={index} className={index % 2 === 0 ? "first" : "second"}>
            {item}
          </Items>
        ))}
      </>
    );
  }
}
const items = [<SliderPage />, <CardPage />];
