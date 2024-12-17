const express = require("express");
const router = express.Router();
const { users } = require("../models/index");

// Get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await users.findAll();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await users.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: "users not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else res.status(404).json({ message: "users not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: "users deleted successfully" });
    } else res.status(404).json({ message: "users not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
