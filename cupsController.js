import { Cup } from "./cupsModel.js"

export const getAllCups = async (req, res) => {
    const cups = await Cup.find(); // Devuelve un array con todas las Cups en la DB
    res.json({
        cups,
    })
}
export const createNewCup = async (req, res) => {
    const { name, value } = req.body
    const newCup = new Cup({ name, value })
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