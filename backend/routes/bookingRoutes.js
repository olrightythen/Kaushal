const express = require("express");
const router = express.Router();
const { bookings } = require("../models/index");

// Get bookings by user id
router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userBookings = await bookings.findAll({
      where: { user_id: id },
    });
    res.json(userBookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all allBookings
router.get("/", async (req, res) => {
  try {
    const allBookings = await bookings.findAll();
    res.json(allBookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new booking
router.post("/", async (req, res) => {
  const {
    user_id,
    name,
    phone,
    service_type,
    booking_date,
    time_slot,
    location,
    notes,
    status,
  } = req.body;

  try {
    // Create a new booking entry in the database
    const newBooking = await bookings.create({
      user_id,
      name,
      phone,
      service_type,
      booking_date,
      time_slot,
      location,
      notes,
      status,
    });

    // Respond with success and the created booking data
    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({
      message: "Failed to create booking",
      error: error.message,
    });
  }
});

// Update booking status
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const booking = await bookings.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status;
    await booking.save();

    res.status(200).json({ message: "Status updated successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating booking status" });
  }
});

// Delete a booking
router.delete("/:id", async (req, res) => {
  try {
    const booking = await bookings.findByPk(req.params.id);
    if (booking) {
      await booking.destroy();
      res.json({ message: "bookings deleted successfully" });
    } else res.status(404).json({ message: "bookings not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
