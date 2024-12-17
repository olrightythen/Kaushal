import React from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { LoginForm } from "../components/auth/LoginForm";

export function Login() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle={
        <>
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </a>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}
