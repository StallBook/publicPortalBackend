import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);


const userSchema = new mongoose.Schema({
    userID: { type: Number, unique: true },
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
})

userSchema.plugin(AutoIncrement, { inx_field: 'userID' });

export default mongoose.model("User", userSchema);