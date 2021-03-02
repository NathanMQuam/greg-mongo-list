import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
   {
      bedrooms: { type: String, required: true},
      bathrooms: { type: String, required: true},
      levels: { type: String, required: true},
      description: { type: String },
      price: { type: Number, required: true },
      imgUrl: { type: String, required: true, default: "http://placehold.it/200x200" },
      color: { type: String, required: true, default: "tan" }
   },
   { timestamps: true, toJSON: { virtuals: true } }
);

export default House;
