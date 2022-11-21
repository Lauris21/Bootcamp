const AvatarRoutes = require("express").Router();

const { isAuth } = require("../../middlewares/auth.middleware");

const {
  getAvatars,
  postAvatar,
  getAvatar,
  updateAvatar,
  deleteAvatar,
} = require("./avatar.controller");

AvatarRoutes.get("/", [isAuth], getAvatars);
AvatarRoutes.get("/", [isAuth], getAvatar);
AvatarRoutes.post("/", [isAuth], postAvatar);
AvatarRoutes.patch("/", [isAuth], updateAvatar);
AvatarRoutes.delete("/", [isAuth], deleteAvatar);

module.exports = AvatarRoutes;
