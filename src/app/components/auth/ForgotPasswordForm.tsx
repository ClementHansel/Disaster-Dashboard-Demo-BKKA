import { useState } from "react";

export default function ForgotPasswordForm({
  onSwitch,
}: {
  onSwitch: (type: "login" | "register" | "forgot") => void;
}) {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button className="w-full bg-yellow-500 text-white p-2 rounded">
        Reset Password
      </button>
      <div className="text-sm text-center mt-2">
        <button onClick={() => onSwitch("login")} className="text-blue-600">
          Back to Login
        </button>
      </div>
    </div>
  );
}
