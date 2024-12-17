import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/bookings/user/" + userId);
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const bookings = await response.json();
        setOrders(bookings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false); // Ensure loading state is disabled in case of error
      }
    };
    fetchOrders();
  }, []);

  function getStatusColor(status) {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-24 sm:px-12 lg:px-8">
      <div className="mb-6 flex justify-center items-center">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Your Bookings
        </h2>
      </div>

      {/* Bookings List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((booking, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.service_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.booking_date} {booking.time_slot}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-6 flex justify-end items-center">
        <Link to="/booking">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
          <PlusCircle size={18} className="mr-2" />
          Add Booking
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Bookings;
