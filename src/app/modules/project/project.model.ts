import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String, // image URL
      required: true,
    },
    projectLink: {
      type: String, // GitHub or source code link
      required: true,
    },
    liveSite: {
      type: String, // Live demo link
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String], // array of feature strings
      default: [],
    },
  },
  { timestamps: true }
);

export const Project = model("Project", projectSchema);
