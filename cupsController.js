import { Cup } from "./cupsModel.js"

export const getAllCups = (req, res) => {
    res.json({
        hola: "mundo"
    })
}
export const createNewCup = async (req, res) => {
    const { name, value } = req.body
    const newCup =  new Cup({ name, value })
    await newCup.save()
    res.json({
        cup: "created",
        name,
        value
    })
}
export const deleteOneCup = (req, res) => {
    
}
export const updateOneCup = (req, res) => {
    
}