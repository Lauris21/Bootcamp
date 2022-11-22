const DogRoutes = require('express').Router();

const { getAllDogs, createDog, patchDog } = require('./dog.controller');

DogRoutes.get('/', getAllDogs);
DogRoutes.get('/', createDog);

module.exports = DogRoutes;
