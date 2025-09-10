import mongoose from "mongoose";
import studentSchema from "../schema/allSchema.js";

const studentModel = mongoose.model('students',studentSchema)

export default studentModel;