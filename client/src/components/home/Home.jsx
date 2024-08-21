import React, { useRef } from "react";
import GameLayout from "../game_layout/GameLayout";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

function Home(props) {
  const nameRef = useRef();
  const enemyRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = JSON.stringify({
      newName: nameRef.current.value,
      opponent: enemyRef.current.value,
    });
    props.updateName(body.newName);
    props.updateOpponents(body.opponent);
    navigate("/play");
  };
  return (
    <>
      <h1>Welcome to the Game of Clue!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Your Name</Label>
          <Input
            id="newPlayer"
            name="newPlayer"
            innerRef={nameRef}
            placeholder="Type your name or nickname"
            type="text"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Temp Opponent Input</Label>
          <Input
            id="enemies"
            name="enemies"
            innerRef={enemyRef}
            placeholder="Type your opponent's names here"
            type="text"
          ></Input>
        </FormGroup>
        <Button></Button>
      </Form>
    </>
  );
}

export default Home;
