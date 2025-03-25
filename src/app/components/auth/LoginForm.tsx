import { useState } from "react";

export default function LoginForm({
  onSwitch,
}: {
  onSwitch: (type: "login" | "register" | "forgot") => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
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
      <button className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      <div className="text-sm text-center mt-2">
        <button onClick={() => onSwitch("forgot")} className="text-blue-600">
          Forgot Password?
        </button>{" "}
        |
        <button onClick={() => onSwitch("register")} className="text-blue-600">
          {" "}
          Register
        </button>
      </div>
    </div>
  );
}
