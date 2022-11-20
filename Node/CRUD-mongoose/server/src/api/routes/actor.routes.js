const ActorRoutes = require("express").Router();

const {
  getActor,
  getActors,
  postActor,
  updateActor,
  deleteActor,
} = require("../controllers/actorController");

ActorRoutes.get("/", getActors);
ActorRoutes.get("/:id", getActor);
ActorRoutes.post("/", postActor);
ActorRoutes.patch("/:id", updateActor);
ActorRoutes.delete("/:id", deleteActor);

module.exports = ActorRoutes;
