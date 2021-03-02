import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
   {
      jobTitle: { type: String, required: true },
      company: { type: String, required: true },
      description: { type: String },
      hours: { type: Number, required: true },
      rate: { type: Number, required: true },
      status: {type: String, default: "Hiring"}
   },
   { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
