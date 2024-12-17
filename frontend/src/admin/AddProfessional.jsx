import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AddProfessional = () => {
  const [added, setAdded] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("http://localhost:3000/professionals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add Professional");
      }
      toast.success("Professional added successfully");
      setAdded(true);
    } catch (error) {
      console.error("Error adding Professional:", error);
      toast.error("Failed to add Professional");
    }
  };

  if (added) {
    return <Navigate to="/admin/professionals" />;
  }

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Add Professional</h1>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="employment_type"
              className="block text-sm font-medium text-gray-700"
            >
              Employment Type
            </label>
            <select
              name="employment_type"
              id="employment_type"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Professional
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProfessional;
