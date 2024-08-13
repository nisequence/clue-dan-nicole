import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  CarouselIndicators,
  CardText,
  CardTitle,
  Row,
  Col,
  Tooltip,
} from "reactstrap";
// import Cards from "../../../../../server/helpers/cards.json"; //TODO - use single user's hand for display purposes

const items = [
  {
    src: "https://www.ultraboardgames.com/clue/gfx/miss-scarlet.jpg",
    altText: "Miss Scarlet",
    caption: "person",
    key: 1,
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-4h5dJhFSDIo%2FTVb3I4pRRMI%2FAAAAAAAAAz4%2F8daxaFVT5Qk%2Fs1600%2Fcluedo_art_loc_kitchen_v0.2.jpg&f=1&nofb=1&ipt=c820fee4fa9664eadfd02b3fcbb5a2ca527d4b860b3704ea8cfc68f2c39214bf&ipo=images",
    altText: "kitchen",
    caption: "room",
    key: 2,
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.imfdb.org%2Fimages%2Fe%2Fec%2FH%2526R_Model_733.jpg&f=1&nofb=1&ipt=4fcfeec3022fd77e4b6f927f1ce0c3b58637cad21820ec4e2bef2519b0339b9f&ipo=images",
    altText: "revolver",
    caption: "weapon",
    key: 3,
  },
];

function HeldCards() {
  //* Carousel States to display rooms within card
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{
          height: "60vh",
          width: "50vw",
          backgroundColor: "rgba(255, 255, 255, 0.723)",
          padding: "1rem",
        }}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
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
  );
}

export default HeldCards;
