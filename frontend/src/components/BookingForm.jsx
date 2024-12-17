import React, { useState } from "react";
import { ServiceSelection } from "./ServiceSelection";
import { DateTimePicker } from "./DateTimePicker";
import { LocationInput } from "./LocationInput";
import { NotesInput } from "./NotesInput";
import { PersonalInfo } from "./PersonalInfo";
import toast from "react-hot-toast";

export default function BookingForm() {
  // get user id from localStorage
  const userId = localStorage.getItem("id");

  // Define initial form data
  const initialFormData = {
    user_id: userId || "",
    service_type: "",
    booking_date: "",
    time_slot: "",
    location: "",
    notes: "",
    fullName: "",
    phone: "",
    status: "pending",
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      user_id: formData.user_id,
      name: formData.fullName,
      phone: formData.phone,
      service_type: formData.service_type,
      booking_date: formData.booking_date,
      time_slot: formData.time_slot,
      location: formData.location,
      notes: formData.notes,
      status: formData.status,
    };

    try {
      const response = await fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        toast.success("Booking created successfully");
        // Reset form after successful submission
        setFormData(initialFormData);
      } else {
        const errorData = await response.json();
        toast.error(
          `Failed to create booking: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while creating the booking");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ServiceSelection
        selectedService={formData.service_type}
        onServiceChange={(service) => handleChange("service_type", service)}
      />

      <PersonalInfo
        fullName={formData.fullName}
        phone={formData.phone}
        onChange={(field, value) => handleChange(field, value)}
      />

      <DateTimePicker
        selectedDate={formData.booking_date}
        selectedTime={formData.time_slot}
        onDateChange={(date) => handleChange("booking_date", date)}
        onTimeChange={(time) => handleChange("time_slot", time)}
      />

      <LocationInput
        address={formData.location}
        onAddressChange={(address) => handleChange("location", address)}
      />

      <NotesInput
        notes={formData.notes}
        onNotesChange={(notes) => handleChange("notes", notes)}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Book Appointment
      </button>
    </form>
  );
}
