import Express from "express";

export const MoviesList = (req, res)=> {
    res.send("Get movies lists")
}

export const MoviesCreate = (req, res)=> {
    res.send("Creating the Movies")
}

export const MovieUpdate = (req, res)=> {
    res.send("Update the movie")
}

export const MovieDelete = (req, res)=> {
    res.send("Delete the movie")
}