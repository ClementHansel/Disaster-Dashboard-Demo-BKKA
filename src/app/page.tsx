"use client"; // Ensure it's a Client Component

import { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";

export default function AuthPage() {
  const [authType, setAuthType] = useState<"login" | "register" | "forgot">(
    "login"
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {authType === "login" && <LoginForm onSwitch={setAuthType} />}
        {authType === "register" && <RegisterForm onSwitch={setAuthType} />}
        {authType === "forgot" && <ForgotPasswordForm onSwitch={setAuthType} />}
      </div>
    </main>
  );
}
