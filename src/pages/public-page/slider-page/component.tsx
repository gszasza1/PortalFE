import React from "react";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption
} from "reactstrap";
import { MappedProps, DispachedProps } from "./connect";

import tempImage from "../../../assets/tempImage.png";
import "./design.scss";

interface Props extends MappedProps, DispachedProps {}
interface State {
  activeIndex: number;
  animating: boolean;
}

export class SliderPageUnconnected extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { activeIndex: 0, animating: false };
  }

  componentDidMount() {
    this.props.getWelcomePageData();
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
      this.state.activeIndex === this.props.items.db.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.db.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex: number) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const slides = this.props.items.db.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.title}
        >
          <img src={item.img ? item.img : tempImage} alt={item.title} />
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
            items={this.props.items.db}
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
        {/* <div className="mouse-container">
          <div className="mouse">
            <div></div>
          </div>
        </div> */}
        {/* <div className="border"></div> */}
      </>
    );
  }
}
