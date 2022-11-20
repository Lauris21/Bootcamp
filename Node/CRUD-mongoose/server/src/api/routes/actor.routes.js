const ActorRoutes = require("express").Router();

const {
  getActor,
  getActors,
  getActorByName,
  getActorByAge,
  getActorGreater,
  postActor,
  updateActor,
  deleteActor,
} = require("../controllers/actorController");

ActorRoutes.get("/", getActors);
ActorRoutes.get("/:id", getActor);
ActorRoutes.get("/name/:name", getActorByName);
ActorRoutes.get("/age/:age", getActorByAge);
ActorRoutes.get("/ageGreater/:age", getActorGreater);
ActorRoutes.post("/", postActor);
ActorRoutes.patch("/:id", updateActor);
ActorRoutes.delete("/:id", deleteActor);

module.exports = ActorRoutes;
