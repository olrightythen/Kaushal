import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

const ManageProfessionals = () => {
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

 const fetchProfessionals = async () => {
   try {
      const response = await fetch("http://localhost:3000/professionals");
      if (!response.ok) {
        throw new Error("Failed to fetch professionals");
      }
      const data = await response.json();
      setProfessionals(data);
      setLoading(false);
   } catch (error) {
     console.error("Error fetching professionals:", error);
     setLoading(false);
   }
 };


  const deleteProfessional = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/professionals/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete Professional");
      }
      setProfessionals(professionals.filter((professional) => professional.id !== id));
      toast.success("Professional deleted successfully");
    } catch (error) {
      console.error("Error deleting Professional:", error);
      toast.error("Failed to delete Professional");
    }
  };

  const handleDelete = (id) => {
    confirm("Are you sure you want to delete this Professional?") && deleteProfessional(id);
  };

  useEffect(() => {
    fetchProfessionals();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Professionals</h1>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to="/admin/addprofessional">Add Professional</Link>
        </button>
      </div>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Skills
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {professionals.map((professional) => (
              <tr key={professional.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {professional.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {professional.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {professional.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {professional.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {professional.skills}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
                    <Link to={`/admin/editprofessionals/${professional.id}`}>
                      Edit
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(professional.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProfessionals;
