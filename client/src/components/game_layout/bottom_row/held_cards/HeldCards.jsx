import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CardText,
  CardTitle,
  Row,
  Col,
  Tooltip,
} from "reactstrap";
import Cards from "../../../../../server/helpers/cards.json"; //TODO - use single user's hand for display purposes

const items = [
  {
    title: "Miss Scarlet",
    type: "person",
    key: 1,
  },
  {
    title: "Kitchen",
    type: "room",
    key: 2,
  },
  {
    title: "Candlestick",
    type: "weapon",
  },
];

function HeldCards() {
  //* Carousel States to display rooms within card
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //* var for useNav()
  const navigate = useNavigate();

  //* Carousel functionality to move forward through cards
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === props.rooms.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  //* Carousel functionality to move backward through cards
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? props.rooms.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  //* Carousel functionality for controls at the bottom of the card
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  //* Carousel/card display function
  const slides = Cards.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key="test" //TODO - replace with item id's
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <Card
          body
          className="my-2"
          style={{
            height: "60vh",
            backgroundColor: "rgba(255, 255, 255, 0.723)",
            padding: "1rem",
          }} // adjusted card sizing to expand to the carousel borders
        >
          <CardTitle tag="h3">Card Title</CardTitle>
          <CardText tag="h6">Card Text</CardText>
          <br></br>
        </Card>
      </CarouselItem>
    );
  });

  return (
    <>
      <style>
        {`.custom-tag {
            max-width: 100%;
            max-height: 90%;
      }`}
        {/* maximum sizing for the carousel component */}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={props.rooms}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

export default HeldCards;
