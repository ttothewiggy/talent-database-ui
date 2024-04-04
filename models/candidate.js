import mongoose, { Schema } from "mongoose";

const candidateSchema = new Schema(
    {
        name: String, 
        title: String
    }, {
        timestamps, true,
    }
)

const Candidate = mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema); 

export default Candidate;