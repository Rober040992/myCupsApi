import mongoose from "mongoose";

const cupsSchema = new mongoose.Schema({ //create the schema model
    name: { type: String, unique: true, required: true },
    value: { type: Number, required: true }
})

export const Cup = mongoose.model("cup", cupsSchema) // create the collection