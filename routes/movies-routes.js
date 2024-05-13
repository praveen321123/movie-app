import Express from "express";
import { MovieDelete, MovieUpdate, MoviesCreate, MoviesDetail, MoviesList } from "../controller/movies-controller.js";

const router = Express.Router()

// R - Movies Readings
router.get('/',MoviesList)

router.get('/:id', MoviesDetail)

// C - Creating the movies
router.post('/', MoviesCreate)

// U - Update the movie
router.put('/:id', MovieUpdate)

//D - Delete the movie
router.delete('/:id', MovieDelete)

export default router