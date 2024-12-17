import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditProfessional = () => {
  const { id } = useParams();
  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [edited, setEdited] = useState(false);

  // Fetch the professional data when the component mounts
  useEffect(() => {
    const fetchProfessional = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/professionals/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch professional data");
        const data = await response.json();
        setProfessional(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessional();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessional((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Edit the professional's details
  const editProfessional = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/professionals/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(professional),
        }
      );

      if (!response.ok) throw new Error("Failed to edit professional");
      toast.success("Professional edited successfully");
      setEdited(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Show loading spinner while data is fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // If edit is successful, redirect to the professionals list
  if (edited) {
    return <Navigate to="/admin/professionals" />;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Edit Professional</h1>
      <form onSubmit={editProfessional} className="max-w-md">
        {["name", "phone", "email", "skills"].map((field) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-sm font-medium text-gray-700"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={professional[field] || ""}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        ))}
        <div className="mb-4">
          <label
            htmlFor="employment_type"
            className="block text-sm font-medium text-gray-700"
          >
            Employment Type
          </label>
          <select
            id="employment_type"
            name="employment_type"
            value={professional.employment_type || "full-time"}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
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
          Edit Professional
        </button>
      </form>
    </div>
  );
};

export default EditProfessional;
