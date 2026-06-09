const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Make the legacy core service return the same shape as the improved task service:
// Use "id" instead of Mongo's "_id" in JSON responses.
TaskSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Task", TaskSchema);
