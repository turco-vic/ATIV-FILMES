const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.getAllMovies);
router.post("/movies", movieController.addMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteSong);
router.get("/movies/:id", movieController.getMovieById);

module.exports = router;
