import Express from "express";
import MoviesRoute from "./routes/movies-routes.js"
import connectDb from "./lib/db.js";

const app = Express()
const port = 3000

connectDb()

app.get('/', (req, res)=> {
    res.json({msg: "Hello world"})
})

app.use("/movies", MoviesRoute)

app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`) 
})