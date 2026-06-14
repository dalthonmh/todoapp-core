const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middlewares/auth");

// GET all tasks
// Sorted so that incomplete tasks (completed = false) appear first (top of the list),
// and completed tasks (completed = true) appear at the bottom.
// This matches the ordering used in the todoapp-task service.
router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ completed: 1, createdAt: -1 });
  res.json(tasks);
});

// POST create a task
router.post("/", auth, async (req, res) => {
  const { title } = req.body;
  const username = req.user.username;

  const newTask = new Task({ title, username });
  await newTask.save();
  res.status(201).json(newTask);
});

// PUT update a task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// DELETE a task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
