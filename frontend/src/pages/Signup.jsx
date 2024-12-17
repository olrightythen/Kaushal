import React from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { SignupForm } from "../components/auth/SignupForm";

export function Signup() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle={
        <>
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </a>
        </>
      }
    >
      <SignupForm />
    </AuthLayout>
  );
}
