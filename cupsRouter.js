import express from "express"
import { getAllCups, createNewCup, deleteOneCup, updateOneCup } from "./cupsController.js"

export const cupsRouter = express.Router() //create the router

// CRUD
cupsRouter.get('/', getAllCups)

cupsRouter.post('/', createNewCup)

cupsRouter.delete('/:id', deleteOneCup)

cupsRouter.put('/:id', updateOneCup)
