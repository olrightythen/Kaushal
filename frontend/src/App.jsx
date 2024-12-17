import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/shared/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Search from "./pages/Search.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Protected from "./components/Protected.jsx";
import AdminNav from "./admin/AdminNav.jsx";
import Admin from "./admin/Admin.jsx";
import EditProfessional from "./admin/EditProfessional.jsx";
import AddProfessional from "./admin/AddProfessional.jsx";
import ManageProfessionals from "./admin/ManageProfessionals.jsx";
import ManageOrders from "./admin/ManageOrders.jsx";
import ManageUsers from "./admin/ManageUsers.jsx";
import NotFound from "./pages/NotFound.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import Booking from "./pages/Booking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },

  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },

  {
    path: "/search/:query",
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },

  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },

  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },

  {
    path: "dashboard",
    element: (
      <Protected>
        <Layout>
          <Dashboard />
        </Layout>
      </Protected>
    ),
  },

  {
    path:"booking",
    element: (
      <Protected>
        <Layout>
          <Booking />
        </Layout>
      </Protected>
    ),
  },

  {
    path: "bookings",
    element: (
      <Protected>
        <Layout>
          <Bookings />
        </Layout>
      </Protected>
    ),
  },

  {
    path: "/admin",
    element: (
      <>
        <AdminNav />
        <Admin />
      </>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <AdminDashboard totalProfessionals={10} totalOrders={5} totalUsers={3} />
        ),
      },

      {
        path: "editprofessionals/:id",
        element: <EditProfessional />,
      },

      {
        path: "addprofessional",
        element: <AddProfessional />,
      },

      {
        path: "professionals",
        element: <ManageProfessionals />,
      },

      {
        path: "orders",
        element: <ManageOrders />,
      },

      {
        path: "users",
        element: <ManageUsers />,
      },
    ],
    errorElement: <NotFound />,
  },

  // 404 page
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
