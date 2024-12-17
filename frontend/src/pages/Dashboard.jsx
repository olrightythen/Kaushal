import {
  Bell,
  User,
  ChevronDown,
  Calendar,
  CreditCard,
  HelpCircle,
  PlusCircle,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">Kaushal</h1>
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300"
          >
            <Calendar className="inline-block mr-2" size={18} />
            Bookings
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            <CreditCard className="inline-block mr-2" size={18} />
            Payment History
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            <HelpCircle className="inline-block mr-2" size={18} />
            Support
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-sm">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">My Bookings</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full hover:bg-gray-200">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <User size={20} />
              <span>John Doe</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Your Bookings</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center">
              <PlusCircle size={18} className="mr-2" />
              New Booking
            </button>
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
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.dateTime}
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
        </main>
      </div>
    </div>
  );
}

const bookings = [
  {
    service: "Home Cleaning",
    dateTime: "2023-06-15 14:00",
    location: "123 Main St",
    status: "Pending Assignment",
  },
  {
    service: "Plumbing Repair",
    dateTime: "2023-06-16 10:00",
    location: "456 Elm St",
    status: "In Progress",
  },
  {
    service: "Electrical Work",
    dateTime: "2023-06-14 09:00",
    location: "789 Oak St",
    status: "Completed",
  },
  {
    service: "Painting",
    dateTime: "2023-06-17 11:00",
    location: "321 Pine St",
    status: "Pending Assignment",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "Pending Assignment":
      return "bg-yellow-100 text-yellow-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
