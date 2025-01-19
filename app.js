import "dotenv/config"
import express from "express"
import { cupsRouter } from "./cupsRouter.js"
import connectMongoose from "./connectMongo.js"

const connection = await connectMongoose() // esperamos a la conexion de la DB
console.log(`conected to: ${connection.name} atlas MongoDB`)

const app = express()
const PORT = 3333 // same => app.listen(3333)
// listen to the port
app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT}`);
});

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true })) // to read Forms
app.use(express.json()) // to parse jsons properly

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

//API route
app.use('/cups', cupsRouter)




