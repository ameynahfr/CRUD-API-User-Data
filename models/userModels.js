import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    email : String
})

export const userModel = mongoose.model("User", userSchema)
