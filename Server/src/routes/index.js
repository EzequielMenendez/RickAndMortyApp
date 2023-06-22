const { login } = require("../controlers/login");
const { getCharById } = require("../controlers/getCharById");
const { postFav, deleteFav } = require("../controlers/handleFavorites");
const { songsController } = require("../controlers/songsController");
const router = require("express").Router();


router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router