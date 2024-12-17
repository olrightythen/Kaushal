import React from "react";
import { Menu } from "lucide-react";
import {
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import { Button } from "../Button";
import { Link } from "react-router-dom";

const userMenuItems = { content: "Logout", href: "#", Icon: HiArrowRightOnRectangle };

export default function Header({ isLoggedIn, userName }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rememberMe");
    window.location.href = "/";
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-2xl font-bold text-blue-600">Kaushal</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="/#benefits" className="text-gray-700 hover:text-blue-600">
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600"
            >
              Testimonials
            </a>
            {isLoggedIn && (
              <a href="/bookings" className="text-gray-700 hover:text-blue-600">
                Bookings
              </a>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Button onClick={handleLogout}>{userMenuItems.content}</Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
