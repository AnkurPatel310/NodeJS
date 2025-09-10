import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name:String,
    grade:String
})

export default studentSchema;