import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { Button } from "../Button";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Handle loading state for better UX

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the specific field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    console.log("Heelo");
    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true); // Show loading state during submission
        console.log("asfdhdh");

        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem(
            "firstName",
            JSON.stringify(data.data.user.firstName)
          );
          localStorage.setItem(
            "lastName",
            JSON.stringify(data.data.user.lastName)
          );
          localStorage.setItem("id", JSON.stringify(data.data.user.id));
          localStorage.setItem("token", JSON.stringify(data.data.token));
          window.location.href = "/"; // Redirect on success
        } else {
          const errorData = await response.json();
          console.log("bye bye");

          setErrors({ form: errorData.error || "Login failed" });
        }
      } catch (err) {
        console.error("Error during login:", err);
        setErrors({ form: "An unexpected error occurred" });
      } finally {
        setLoading(false); // Reset loading state
      }
    } else {
      setErrors(newErrors);
      console.log("bye");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.form && (
        <div className="text-red-600 text-sm mb-4">{errors.form}</div>
      )}

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email address"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
