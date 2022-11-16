const express = require("express");
const cors = require("cors");

const { connect } = require("./database/connect");
const Character = require("./models/character.model");

connect();

const server = express();

server.use(cors());

const router = express.Router();

router.get("/character", async (req, res) => {
  try {
    const character = await Character.find();
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/character/:id", async (req, res) => {
  const id = req.params.id;
  const characterById = await Character.findById(id);
  if (characterById) {
    res.send(characterById);
  } else {
    return res.status(404).json("No character found by this id");
  }
});

router.get("/character/clase/:clase", async (req, res) => {
  const { clase } = req.params;
  try {
    const characterByClass = await Character.find({ clase: clase });
    if (characterByClass) {
      res.send(characterByClass);
    } else {
      return res.status(404).json("No character found by class");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

server.use("/diablo", router);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} ⚡️`);
});
