import { useState } from "react";

export default function RegisterForm({
  onSwitch,
}: {
  onSwitch: (type: "login" | "register" | "forgot") => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button className="w-full bg-green-500 text-white p-2 rounded">
        Register
      </button>
      <div className="text-sm text-center mt-2">
        Already have an account?{" "}
        <button onClick={() => onSwitch("login")} className="text-blue-600">
          Login
        </button>
      </div>
    </div>
  );
}
