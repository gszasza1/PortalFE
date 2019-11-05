import React from "react";
import { SliderPage } from "./slider-page/connect";
import { CardPage } from "./card-page/connect";
import { Items } from "../../constant/items";
import { WelcomePage } from "./welcome-page/component";

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
