const Actor = require("../models/actorModel");

const getActors = async (req, res, next) => {
  try {
    const actors = await Actor.find().populate("films");
    res.status(200).json(actors);
  } catch (error) {
    return next(error);
  }
};

const getActor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findById(id).populate("films");
    return res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
};

const getActorByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const actorByName = await Actor.find({ name: name });
    return res.status(200).json(actorByName);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getActorByAge = async (req, res, next) => {
  const { age } = req.params;
  try {
    const actorByAge = await Actor.find({ age: age });
    return res.status(200).json(actorByAge);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getActorGreater = async (req, res, next) => {
  const { age } = req.params;
  try {
    const actorByAge = await Actor.find({ age: { $gt: age } });
    return res.status(200).json(actorByAge);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postActor = async (req, res, next) => {
  try {
    const actor = new Actor(req.body);
    const actorInDB = await actor.save();
    return res.status(201).json(actorInDB);
  } catch (error) {
    return next(error);
  }
};

const updateActor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = new Actor(req.body);
    actor._id = id;
    const updateActorDB = await Actor.findByIdAndUpdate(id, actor);
    return res.status(200).json(updateActorDB);
  } catch (error) {
    return next(error);
  }
};

const deleteActor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByIdAndDelete(id);
    return res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getActor,
  getActors,
  getActorByName,
  getActorByAge,
  getActorGreater,
  postActor,
  updateActor,
  deleteActor,
};
