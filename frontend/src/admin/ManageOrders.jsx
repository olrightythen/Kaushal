import { useState, useEffect, useCallback } from "react";

// Custom hook for fetching bookings
const useBookings = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/bookings");
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

  return { orders, loading, setOrders };
};

function ManageOrders() {
  const { orders, loading, setOrders } = useBookings();
  const statusOptions = ["pending", "in-progress", "completed", "cancelled"];

  const handleEdit = useCallback(
    async (bookingId, newStatus) => {
      try {
        const response = await fetch(`http://localhost:3000/bookings/${bookingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
          throw new Error("Error updating status");
        }

        // Update local state after successful status change
        setOrders((prevOrders) =>
          prevOrders.map((booking) =>
            booking.id === bookingId
              ? { ...booking, status: newStatus }
              : booking
          )
        );
      } catch (error) {
        console.error("Error updating status:", error);
      }
    },
    [setOrders] // Memoize function to avoid unnecessary re-renders
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete booking");
        }
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== id)
        );
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    },
    [setOrders] // Memoize function to avoid unnecessary re-renders
  );

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Bookings</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found</p> // Display message if no orders
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
                User-Id
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Service Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Booking Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time Slot
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Notes
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.user_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.service_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(order.booking_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.time_slot}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.notes}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={order.status}
                    onChange={(e) => handleEdit(order.id, e.target.value)}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(order.id)}
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
}

export default ManageOrders;
