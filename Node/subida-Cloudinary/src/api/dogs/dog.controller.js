const Dog = require('./dog.model');
const { setError } = require('../../helpers/errors');
const { deleteFile } = require('../../middlewares/delete-file');

const getAllDogs = async (req, res, next) => {
  try {
    const dogs = await Dog.find();
    return res.status(200).json({
      message: 'All dogs',
      dogs,
    });
  } catch (error) {
    return next(setError(500, error.message | 'Dogs not found'));
  }
};

const createDog = async (req, res, next) => {
  try {
    const dog = new Dog(req.body);
    if (req.file) {
      // La imagen tendrá la ruta local del fichero
      dog.image = req.file.path;
    }
    const dogInDB = await dog.save();
    return res.status(201).json({
      message: 'Dog created',
      dogInDB,
    });
  } catch (error) {
    return next(setError(500, error.message | 'Failed in dog creation'));
  }
};

const patchDog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patchDogDB = new Dog(req.body);
    patchDogDB._id = id;
    const dogDB = await Dog.findByIdAndUpdate(id, patchDogDB);

    if (req.file) {
      deleteFile(dogDB.image);
      patchDogDB.image = req.file.path;
    }

    if (!dogDB) {
      return next('Dog not found');
    }
    return res.status(200).json({
      new: patchDogDB,
      old: dogDB,
    });
  } catch (error) {
    return next(setError(500, error.message | 'Failed in dog update'));
  }
};

module.exports = { getAllDogs, createDog, patchDog };
