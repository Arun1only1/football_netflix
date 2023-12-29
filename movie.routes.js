import express from "express";

const router = express.Router();

const movieList = [];

// add movie
router.post("/movie/add", (req, res) => {
  const newMovie = req.body;

  movieList.push(newMovie);

  return res.status(201).send({ message: "Movie is added successfully." });
});

// get movie list
router.get("/movie/list", (req, res) => {
  return res.status(200).send(movieList);
});

export default router;
