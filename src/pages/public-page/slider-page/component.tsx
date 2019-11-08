import './design.scss';

import React from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';

import Game from '../../../assets/game.svg';
import Homework from '../../../assets/homework.svg';
import Ranklist from '../../../assets/ranklist.svg';

interface Props {}
interface State {
  activeIndex: number;
  animating: boolean;
}

export class SliderPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { activeIndex: 0, animating: false };
  }

  onExiting = () => {
    this.setState({ animating: true });
  };

  onExited = () => {
    this.setState({ animating: false });
  };

  next = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex: number) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem
          className="slider-color"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.title}
        >
          <img className="slider-image" src={item.image} alt={item.title} />
          <CarouselCaption
            captionText={item.secondTitle}
            captionHeader={item.title}
          />
        </CarouselItem>
      );
    });

    return (
      <>
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </>
    );
  }
}
interface Slider {
  image: string;
  title: string;
  secondTitle: string;
}
const items: Slider[] = [
  {
    image: Homework,
    secondTitle: "Fedezd fel a tanulás örömeit!",
    title: "Feladatok"
  },
  {
    image: Game,
    secondTitle: "Ne hagy ki a  játékokat!",
    title: "Játékok"
  },
  {
    image: Ranklist,
    secondTitle: "Csekkold le a pontjaidat",
    title: "Ranglista"
  }
];
