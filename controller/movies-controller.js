import Express from "express";
import Movie from "../models/movie-model.js";

export const MoviesList = async (req, res)=> {
    try {
	  const movie = await Movie.find()
	  res.json(movie)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

export const MoviesCreate = async(req, res)=> {

    const newMovies = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try {
        const movie = await newMovies.save()
        return res.status(202).json(movie)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const MoviesDetail = async(req, res) => {
	try {
		const movie = await Movie.findById(req.params.id)

		if(movie == null){
			return res.status(404).json({message : "Cannot find movie"})
		} else {
			res.json(movie)
		}
	} catch (error) {
		return res.status(201)
	}
}

export const MovieUpdate = async(req, res)=> {
	try {
		const updatedMovie = await Movie.findOneAndUpdate(
			{_id: req.params.id}, 
			{
				title: req.body.title,
				desc: req.body.desc
			},
			{ new: true }     
		)
		res.status(200).json(updatedMovie)
	} catch (error) {
		res.status(400).json({message: error.message})
	}
}

export const MovieDelete = async (req, res)=> {
    const movieId = req.params.id
	try {
    await Movie.deleteOne({_id: movieId})
	  res.json({message: "Movie Deleted"})
	} catch (error) {
	  res.status(500).json({message: error.message})
	}
}