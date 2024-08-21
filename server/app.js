require("dotenv").config();

// -------------------------------------- Express Section ---------------------------------------
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
const PORT = 4300;
// const PORT = process.env.PORT || 4900;

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  ws.send("Welcome new client");

  ws.on("message", function incoming(message) {
    // console.log("received: %s", message);
    // ws.send("got your message, duder:" + message);
        // Broadcast the message to every connected client
        wss.clients.forEach(function each(client) {
          if(client !== ws && client.readyState === WebSocket.OPEN) {
              client.send("" + message)
          }
      })
  });
  ws.on('gameInformation', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      // }
    });
  })
});


const bodyParser = require("body-parser");

// ---------------------- Controllers: -------------------
const player = require("./controllers/player.controller.js")

// Adding cors() to handle the preflight request for us (something Postman did for us), this is part of our server middleware required and called in the app.js
const cors = require("cors");

// Require in the mongoose middleware, pulled/used from node_modules
const mongoose = require("mongoose");
const playerModel = require("./models/player.model");

// Create a variable for our connection address variable from the .env

//! -------- Switching from process.env.MONGODB to this fixes the connection
// const MONGO = "mongodb+srv://danielhenrydev:qO5HMhDUUeTVI3AB@cluster0.kagdxbf.mongodb.net";
const MONGO = process.env.MONGODB;

//! ---------- Disabling this lets the socket connect
mongoose.connect(
  `${MONGO}/clue`,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

// mongoose.connect(`${MONGO}/jeopardy{useNewUrlParser: true}, { useUnifiedTopology: true}`);
// console.log(MONGO,"has connected")
// Create a variable that is an event listener to check if connected.
const db = mongoose.connection;

// Use the above variable to trigger event listener to check connection
db.once("open", () => console.log(`Connected: ${MONGO}`));

// Added to allow us to accept JSON data from the body of our client.
app.use(express.json());

// Allowing the app to use cors
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));

// ! https://community.render.com/t/no-access-control-allow-origin-header/12947


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

app.options("*", (req, res) => {
//   console.log("preflight");
  if (
    //      req.headers.origin === "https://badmintown.onrender.com" &&
    req.headers.origin === "https://danhenrydev.com" &&
    allowMethods.includes(req.headers["access-control-request-method"]) &&
    allowHeaders.includes(req.headers["access-control-request-headers"])
  ) {
    console.log("pass");
    return res.status(204).send();
  } else {
    console.log("fail");
  }
});

app.use("./models/player.model.js", playerModel)

app.get("/", (req, res) => {
  res.send("it's ALIVE");
});


// Changed from app.listen to server.listen when implementing websocket
server.listen(PORT, () =>
  console.log(`The Clue Server is running on Port: ${PORT}`)
);
