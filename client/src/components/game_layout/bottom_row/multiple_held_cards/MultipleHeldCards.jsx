// https://www.npmjs.com/package/react-multi-carousel
// https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel


import React from "react";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MultipleHeldCards(props) {
  const keyNum = useRef();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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

  const clickedCard = (cardImage) => {
    props.setRevealedCard(cardImage)
    // props.setRevealedCard("../../../media/dark-red-x-line-icon.webp")
  }
  
  keyNum.current = 1;
  const output = () => {
    let output = [];
    for (let item of items) {
      const imageInfo = (
        <img onClick={() => clickedCard(item.src)} className="card" key={keyNum.current} src={item.src} alt={item.caption}></img>
      );
      output.push(imageInfo);
      keyNum.current++;
    }
    return output;
  };
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {output()}
      </Carousel>
    </>
  );
}
