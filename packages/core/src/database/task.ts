import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  done: {
    type: Boolean,
    default: false,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const TaskModel = mongoose.model("Task", TaskSchema);
