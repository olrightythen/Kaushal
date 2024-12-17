const express = require("express");
const router = express.Router();
const { professionals } = require("../models/index");

// Get all professionals
router.get("/", async (req, res) => {
  try {
    const allProfessionals = await professionals.findAll();
    res.json(allProfessionals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single professional
router.get("/:id", async (req, res) => {
  try {
    const professional = await professionals.findByPk(req.params.id);
    if (professional) {
      res.json(professional);
    } else res.status(404).json({ message: "professionals not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new professional
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, skills, employment_type } = req.body;
    const newProfessional = await professionals.create({
      name,
      phone,
      email,
      skills,
      employment_type,
    });
    res.status(201).json(newProfessional);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update professional status or details
router.put("/:id", async (req, res) => {
  try {
    const professional = await professionals.findByPk(req.params.id);
    if (professional) {
      await professional.update(req.body);
      res.json(professional);
    } else res.status(404).json({ message: "professionals not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a professional
router.delete("/:id", async (req, res) => {
  try {
    const professional = await professionals.findByPk(req.params.id);
    if (professional) {
      await professional.destroy();
      res.json({ message: "professionals deleted successfully" });
    } else res.status(404).json({ message: "professionals not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
