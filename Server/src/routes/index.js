const login = require("../controlers/login");
const { getCharById } = require("../controlers/getCharById");
const postUser = require("../controlers/postUser");
const postFav = require("../controlers/postFav");
const deleteFav = require("../controlers/deleteFav");
const router = require("express").Router();


router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router