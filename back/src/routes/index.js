const {Router} = require("express");
const getCharById = require ("../controllers/getCharById");
const getCharDetail = require ("../controllers/getCharDetail");
const router = Router();

const {getFav, postFav, deleteFav} = require("../utils/favs")





router.get("/rickandmorty/character/:id", getCharById);
router.get("/rickandmorty/detail/:detailId", getCharDetail);

router.get("/rickandmorty/fav", getFav);
router.post("/rickandmorty/fav", postFav);
router.delete("/rickandmorty/fav/:id", deleteFav);

module.exports = router