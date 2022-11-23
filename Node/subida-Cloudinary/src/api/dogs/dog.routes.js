const DogRoutes = require('express').Router();
const upload = require('../../middlewares/file');
const { getAllDogs, createDog, patchDog } = require('./dog.controller');

DogRoutes.get('/', getAllDogs);
// Upload lee la foto y la sube
DogRoutes.post('/', upload.single('image'), createDog);

module.exports = DogRoutes;
