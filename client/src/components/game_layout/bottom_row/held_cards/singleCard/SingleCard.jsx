import React from "react";
import {
  Carousel,
  CarouselItem,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
} from "reactstrap";

function SingleCard(props) {
  let item = props.item;

  return (
    <>
      <Card
        body
        style={{
          width: "12rem",
          height: "16rem",
          padding: "0.5rem",
          margin: "0.5rem",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          // alignSelf: "center",
          backgroundColor: "yellow",
        }}
      >
        <img
          alt={item.altText}
          src={item.src}
          style={{ maxHeight: "8rem", maxWidth: "10rem" }}
        />
        <CardBody>
          <CardTitle tag="h3">{item.altText}</CardTitle>
          <CardText tag="h6">{item.caption}</CardText>
        </CardBody>
        <br></br>
      </Card>
    </>
  );
}

export default SingleCard;
