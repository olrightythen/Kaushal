import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { Button } from "../Button";

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      e.target.submit();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form
      action="http://localhost:3000/register"
      method="post"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          id="firstName"
          name="firstName"
          type="text"
          label="First name"
          autoComplete="given-name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <FormInput
          id="lastName"
          name="lastName"
          type="text"
          label="Last name"
          autoComplete="family-name"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>

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
        autoComplete="new-password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm password"
        autoComplete="new-password"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <Button type="submit" className="w-full">
        Create account
      </Button>
    </form>
  );
}
