const router = require("express").Router();
const Player = require("../models/player.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT;
// const requireValidation = require("../middleware/validate-session");

const serverError = (res, error) => {
  console.log("Server-side error");
  return res.status(500).json({
    Error: error.message,
  });
};

//? POST Route for Register
router.post("/register", async (req, res) => {
  try {
    //* Take the info from the request body and match it to the schema keys
    const player = new Player({
      playerName: req.body.playerName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 13),
      //ownedCards: null,
    });

    //* Save the new player with this info to our database
    const newPlayer = await player.save();

    //* Provide the player a token to use
    const token = jwt.sign({ id: player._id }, SECRET, {
      expiresIn: "1 week",
    });

    //* Give them a positive response as long as no errors have occurred
    return res.status(200).json({
      player: newPlayer,
      message: "New player created!",
      token,
    });
  } catch (err) {
    serverError(res, err);
  }
});

//? POST Route for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const player = await Player.findOne({ email: email });

    if (!player) throw new Error("Credentials do not match!");

    const passwordMatch = await bcrypt.compare(password, player.password);

    if (!passwordMatch) throw new Error("Credentials do not match!");

    //4. After verified, provide a jwt token
    const token = jwt.sign({ id: player._id }, SECRET, { expiresIn: "1 week" });

    //5. response status returned
    return res.status(200).json({
      message: "Login successful!",
      player,
      token,
    });
  } catch (err) {
    serverError(res, err);
  }
});

//? GET Route for Own Info
// router.get("/find", requireValidation, async (req, res) => {
  router.get("/find", async (req, res) => {

  try {
    const id = req.player._id;

    const findPlayer = await Player.findOne({ _id: id });

    findPlayer
      ? res.status(200).json({
          message: "Found!",
          findPlayer,
        })
      : res.status(404).json({
          message: "Not found!",
        });
  } catch (err) {
    serverError(res, err);
  }
});

//? PATCH Route to Edit Profile
router.patch("/adjust", async (req, res) => {
  // router.patch("/adjust", requireValidation, async (req, res) => {

  try {
    //* Save the player's id and create the filter
    const id = req.player._id;
    const playerFilter = { _id: id };

    //* Pull update-able info from the req.body
    const { playerName, email } = req.body;
    let playerNewInfo;
    if (req.body.password) {
      password = bcrypt.hashSync(req.body.password, 11);
      playerNewInfo = { playerName, email, password };
    } else {
      playerNewInfo = {playerName, email}
    }
    // const playerNewInfo = { firstName, lastName, email, password };

    const returnOption = { new: true };

    //* Attempt to update the corresponding player item in the database
    const updatePlayer = await player.findOneAndUpdate(
      playerFilter,
      playerNewInfo,
      returnOption
    );

    if (!updatePlayer) {
      //* Unable to update player in the database
      return res.status(404).json({
        message: "Error in updating player profile. Please log out & back in.",
      });
    }

  } catch (err) {
    serverError(res, err);
  }
});

//? DELETE Route for Own Account Removals
router.delete("/quit", async (req, res) => {
  // router.delete("/quit", requireValidation, async (req, res) => {

  try {
    //* Pull the player's info from the req
    const id = req.player._id;

    //* Constants to update the player object in the db
    const playerFilter = { _id: id };
    const returnOption = { new: true };

    //* Remove player profile
    const deletePlayer = await Player.deleteOne(playerFilter);

    deletePlayer.deletedCount === 1
      ? res.status(200).json({
          message: `player was successfully deleted!`,
        })
      : res.status(404).json({
          message: `player data unable to be deleted.`,
        });
  } catch (err) {
    serverError(res, err);
  }
});

module.exports = router;