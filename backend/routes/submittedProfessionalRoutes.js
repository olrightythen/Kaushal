const express = require("express");
const router = express.Router();
const { submittedProfessionals } = require("../models/index");

// Get all submitted professionals
router.get("/", async (req, res) => {
  try {
    const allSubmittedProfessionals = await submittedProfessionals.findAll();
    res.json(allSubmittedProfessionals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new submitted professional
router.post("/", async (req, res) => {
  try {
    const newSubmission = await submittedProfessionals.create(req.body);
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
