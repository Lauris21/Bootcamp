const Avatar = require("./avatar.model");

const { setError } = require("../../helpers/error/handle.error");

const getAvatars = async (req, res, next) => {
  try {
    const avatars = await Avatar.find();
    return res.json({
      status: 200,
      message: "Recovered all Avatars",
      data: { avatars },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover avatars"));
  }
};

const getAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const avatar = await Avatar.findById(id);
    return res.json({
      status: 200,
      message: "Recovered avatar",
      data: { avatar },
    });
  } catch (error) {
    return next(setError(500, "Fail to recover avatar"));
  }
};

const postAvatar = async (req, res, next) => {
  try {
    const newAvatar = new Avatar(req.body);
    const newAvatarInDB = await newAvatar.save();

    return res.json({
      status: 201,
      message: "Created Avatar",
      data: { newAvatarInDB },
    });
  } catch (error) {
    return next(setError(500, "Fail to post Avatar"));
  }
};

const updateAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const avatar = new Avatar(req.body);
    avatar._id = id;
    const updateAvatarDB = await Avatar.findByIdAndUpdate(id, avatar);
    return res.json({
      status: 200,
      message: "Updated Avatar",
      data: { updateAvatarDB },
    });
  } catch (error) {
    return next(setError(500, "Fail to update Avatar"));
  }
};

const deleteAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const avatar = await Avatar.findByIdAndDelete(id);
    return res.json({
      status: 200,
      message: "Delete Avatar",
      data: { actor },
    });
  } catch (error) {
    return next(setError(500, "Fail to delete Avatar"));
  }
};

module.exports = {
  getAvatars,
  postAvatar,
  getAvatar,
  updateAvatar,
  deleteAvatar,
};
